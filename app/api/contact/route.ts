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
    console.log('Received contact form submission');

    const { firstName, lastName, email, company, phone, message } = await request.json();

    // Basic validation for required fields
    if (!firstName?.trim() || !lastName?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const senderName = `${firstName.trim()} ${lastName.trim()}`;
    const recipients = [process.env.GMAIL_USER, 'hello@devora.co.uk'].filter((email): email is string => Boolean(email));

    const mailOptions = {
      from: `"Devora Website" <${process.env.GMAIL_USER}>`,
      to: recipients,
      replyTo: email || undefined,
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
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (emailError: any) {
      console.error('Error sending email:', emailError);
      
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
