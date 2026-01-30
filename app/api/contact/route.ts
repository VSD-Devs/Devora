import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting store
// In production, consider using Redis or a database
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: max 2 submissions per IP per 15 minutes (tighter)
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

// Minimum time between form load and submission (in milliseconds)
const MIN_FORM_TIME = 3000; // 3 seconds
const MIN_INTERACTION_TIME = 2000; // 2 seconds after first interaction

// Common spam patterns to detect
const SPAM_PATTERNS = [
  /(?:click here|visit now|buy now|limited time|act now)/i,
  /(?:http|https|www\.)\S+/gi, // Multiple URLs
  /(?:viagra|cialis|casino|poker|loan|debt|free money)/i,
  /(?:dear sir|dear madam|hello friend)/i,
  /(?:guaranteed|risk-free|100%|no risk)/i,
];

// Backlink/SEO spam patterns (common spam enquiries)
const BACKLINK_SPAM_PATTERNS = [
  /(?:backlink|backlinks|back link|back links)/i,
  /(?:link building|linkbuilding)/i,
  /(?:guest post|guestpost|guest posting|guestposting)/i,
  /(?:dofollow|do-follow|nofollow|no-follow)/i,
  /(?:domain authority|domain rating|da\s*[0-9]+|dr\s*[0-9]+)/i,
  /(?:permanent link|permanent backlink)/i,
  /(?:high quality link|quality backlink|premium link)/i,
  /(?:seo service|seo package|seo link)/i,
  /(?:increase.*rank|improve.*rank|boost.*rank)/i,
  /(?:organic traffic|organic ranking)/i,
  /(?:link placement|link insertion)/i,
  /(?:pbn|private blog network)/i,
  /(?:link exchange|link swap)/i,
  /(?:we can.*link|we offer.*link|we provide.*link)/i,
  /(?:interested.*link|looking.*link|need.*link)/i,
];

// Suspicious email domains commonly used for spam
const SUSPICIOUS_EMAIL_DOMAINS = [
  /@(?:gmail|yahoo|hotmail|outlook|aol|protonmail|mail)\.(?:com|co\.uk|net|org)$/i,
  // Note: We'll only flag these if combined with spam content, not block legitimate users
];

// Function to detect backlink spam
function detectBacklinkSpam(message: string, email?: string, company?: string): boolean {
  const combinedText = `${message} ${email || ''} ${company || ''}`.toLowerCase();
  
  // Check for backlink spam patterns
  const backlinkMatches = BACKLINK_SPAM_PATTERNS.reduce((count, pattern) => {
    const matches = combinedText.match(pattern);
    return count + (matches ? matches.length : 0);
  }, 0);
  
  // If 2+ backlink spam patterns found, it's likely spam
  if (backlinkMatches >= 2) {
    return true;
  }
  
  // If message contains backlink-related terms AND sales language, it's spam
  if (backlinkMatches >= 1 && (
    combinedText.includes('offer') || 
    combinedText.includes('service') || 
    combinedText.includes('package') ||
    combinedText.includes('price') ||
    combinedText.includes('cost')
  )) {
    return true;
  }
  
  return false;
}

function getClientIP(request: Request): string {
  // Try to get IP from various headers (for Vercel/proxies)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  // Fallback (won't work in production but useful for local dev)
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // No record or window expired, create new record
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false; // Rate limit exceeded
  }

  // Increment count
  record.count++;
  rateLimitStore.set(ip, record);
  return true;
}

// Clean up old entries periodically (every hour)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60 * 60 * 1000);

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');

    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { firstName, lastName, email, company, phone, message, website, formLoadTime, interactionTime, submitTime } = await request.json();

    // Honeypot check - if website field is present and filled, it's a bot
    if (website && website.trim()) {
      console.log('Bot detected via honeypot field');
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // Time-based validation - check if submission happened too quickly
    if (formLoadTime && submitTime) {
      const timeSinceLoad = submitTime - formLoadTime;
      if (timeSinceLoad < MIN_FORM_TIME) {
        console.log(`Bot detected via time validation: ${timeSinceLoad}ms since form load`);
        return NextResponse.json(
          { error: 'Invalid submission detected' },
          { status: 400 }
        );
      }
    }

    // Check time since first interaction
    if (interactionTime && submitTime) {
      const timeSinceInteraction = submitTime - interactionTime;
      if (timeSinceInteraction < MIN_INTERACTION_TIME) {
        console.log(`Bot detected via interaction time: ${timeSinceInteraction}ms since interaction`);
        return NextResponse.json(
          { error: 'Invalid submission detected' },
          { status: 400 }
        );
      }
    }

    // Basic validation for required fields
    if (!firstName?.trim() || !lastName?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (message.trim().length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long (maximum 2000 characters)' },
        { status: 400 }
      );
    }

    // Content-based spam detection
    const messageLower = message.toLowerCase();
    const spamScore = SPAM_PATTERNS.reduce((score, pattern) => {
      const matches = messageLower.match(pattern);
      return score + (matches ? matches.length : 0);
    }, 0);

    // Check for multiple URLs (common spam pattern)
    const urlMatches = message.match(/(?:http|https|www\.)\S+/gi);
    if (urlMatches && urlMatches.length > 2) {
      console.log(`Spam detected: Multiple URLs found (${urlMatches.length})`);
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // Check for backlink/SEO spam (common spam enquiry type)
    if (detectBacklinkSpam(message, email, company)) {
      console.log('Spam detected: Backlink/SEO spam enquiry');
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // If spam score is too high, reject
    if (spamScore >= 3) {
      console.log(`Spam detected: High spam score (${spamScore})`);
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // Get Resend API key
    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    if (!resendApiKey) {
      console.error('Resend API key missing');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Get from email address (default to hello@devora.co.uk)
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || 'Devora Website <hello@devora.co.uk>';

    // Initialize Resend client
    const resend = new Resend(resendApiKey);

    const senderName = `${firstName.trim()} ${lastName.trim()}`;
    const recipients = ['hello@devora.co.uk'];

    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: recipients,
        reply_to: email || undefined,
        subject: `New Contact Form Submission from ${senderName}`,
        text: `
Name: ${senderName}
Email: ${email}
Company: ${company?.trim() || 'Not provided'}
Phone: ${phone?.trim() || 'Not provided'}

Message:
${message.trim()}
        `.trim(),
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company?.trim() || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone?.trim() || 'Not provided'}</p>
          <h3>Message:</h3>
          <p>${message.trim().replace(/\n/g, '<br>')}</p>
        `.trim(),
      });

      console.log('Email sent successfully:', {
        id: data.id,
        from: fromEmail,
        to: recipients,
        response: data
      });
      return NextResponse.json({ success: true, messageId: data.id });
    } catch (emailError: any) {
      console.error('Detailed Resend Error:', {
        name: emailError?.name,
        message: emailError?.message,
        statusCode: emailError?.statusCode,
        stack: emailError?.stack
      });

      return NextResponse.json(
        { error: `Email sending failed: ${emailError?.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API Route Error:', {
      name: error?.name,
      message: error?.message,
      stack: error?.stack,
    });

    return NextResponse.json(
      { error: error?.message || 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
