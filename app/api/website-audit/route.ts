import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify SMTP connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

export async function POST(request: Request) {
  try {
    const { email, websiteUrl, company } = await request.json();

    // Basic validation for required fields
    if (!email?.trim() || !websiteUrl?.trim()) {
      return NextResponse.json(
        { error: 'Email and website URL are required' },
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

    const recipients = [process.env.GMAIL_USER, 'hello@devora.co.uk'].filter((email): email is string => Boolean(email));

    const mailOptions = {
      from: `"Devora Website" <${process.env.GMAIL_USER}>`,
      to: recipients,
      replyTo: email.trim(),
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
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Website audit email sent successfully:', info.messageId);
      return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (emailError: any) {
      console.error('Error sending website audit email:', emailError);
      
      if (emailError?.code === 'EAUTH') {
        return NextResponse.json(
          { error: 'Email authentication failed. Please check SMTP credentials.' },
          { status: 500 }
        );
      } else if (emailError?.code === 'ESOCKET') {
        return NextResponse.json(
          { error: 'Network error occurred. Please check your internet connection.' },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: `Email sending failed: ${emailError?.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Detailed error:', {
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
