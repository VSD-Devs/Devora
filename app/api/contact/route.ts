import { NextResponse } from 'next/server';
import { Resend } from 'resend';



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
