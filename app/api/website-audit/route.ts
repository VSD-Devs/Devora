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
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { email, websiteUrl, company, website } = await request.json();

    // Honeypot check - if website field is present and filled, it's a bot
    if (website && website.trim()) {
      console.log('Bot detected via honeypot field');
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // Basic validation for required fields
    if (!email?.trim() || !websiteUrl?.trim()) {
      return NextResponse.json(
        { error: 'Email and website URL are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Basic URL validation
    try {
      const url = new URL(websiteUrl.trim());
      if (!url.protocol.startsWith('http')) {
        throw new Error('Invalid protocol');
      }
    } catch (urlError) {
      return NextResponse.json(
        { error: 'Please provide a valid website URL (including http:// or https://)' },
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

    const recipients = ['hello@devora.co.uk'];

    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: recipients,
        reply_to: email.trim(),
        subject: `New Website Audit Request for ${websiteUrl.trim()}`,
        text: `
New Website Audit Request

Email: ${email.trim()}
Website URL: ${websiteUrl.trim()}
Company: ${company?.trim() || 'Not provided'}

This lead requested a free website audit for their site.
        `.trim(),
        html: `
          <h2>New Website Audit Request</h2>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Website URL:</strong> <a href="${websiteUrl.trim()}" target="_blank">${websiteUrl.trim()}</a></p>
          <p><strong>Company:</strong> ${company?.trim() || 'Not provided'}</p>

          <hr style="margin: 20px 0;">
          <p style="color: #666; font-style: italic;">This lead requested a free website audit for their site.</p>
        `.trim(),
      });

      console.log('Website audit email sent successfully:', {
        id: data.id,
        from: fromEmail,
        to: recipients,
        response: data
      });
      return NextResponse.json({ success: true, messageId: data.id });
    } catch (emailError: any) {
      console.error('Detailed Resend Error (Audit):', {
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
    console.error('API Route Error (Audit):', {
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
