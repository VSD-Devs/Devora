import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting store
// In production, consider using Redis or a database
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: max 3 submissions per IP per 15 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

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

    const { firstName, lastName, email, company, phone, message, website } = await request.json();

    // Honeypot check - if website field is present and filled, it's a bot
    if (website && website.trim()) {
      console.log('Bot detected via honeypot field');
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
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
