import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to format values
const formatValue = (key: string, value: string): string => {
  const formatMap: Record<string, Record<string, string>> = {
    websiteType: {
      'portfolio': 'Portfolio Website',
      'ecommerce': 'E-commerce Website',
      'corporate': 'Corporate Website',
      'blog': 'Blog Website',
      'web-app': 'Web Application',
      'other': 'Other'
    },
    budgetRange: {
      'small': '£200 - £1,0000',
      'medium': '£1,000 - £2,500',
      'large': '£2,500+',
      'not-sure': 'Needs Discussion',
      'under-1000': 'Under £1,000',
      '1000-5000': '£1,000 - £5,000',
      '5000-plus': '£5,000+',
      'flexible': 'Flexible/Not Sure'
    },
    purpose: {
      'leads': 'Generate Leads',
      'sales': 'Sell Products',
      'credibility': 'Build Credibility',
      'showcase': 'Showcase Work',
      'other': 'Other'
    },
    timeline: {
      'asap': 'As Soon As Possible',
      '1-month': 'Within 1 Month',
      '1-3-months': '1-3 Months',
      '3-plus-months': '3+ Months',
      'flexible': 'Flexible'
    }
  };

  return formatMap[key]?.[value] || value;
};

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

export async function POST(request: Request) {
  try {
    console.log('Received project inquiry submission');

    const formData = await request.json();
    const {
      name,
      email,
      phone,
      websiteType,
      budgetRange,
      purpose,
      inspiration,
      timeline,
      additionalInfo,
      wantsConsultation
    } = formData;

    // Basic validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const recipients = [process.env.GMAIL_USER, 'hello@devora.co.uk'].filter((email): email is string => Boolean(email));

    const mailOptions = {
      from: `"Devora Website" <${process.env.GMAIL_USER}>`,
      to: recipients,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      text: `
Project Inquiry Details
----------------------

Contact Information:
------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Project Requirements:
------------------
Website Type: ${formatValue('websiteType', websiteType)}
Budget Range: ${formatValue('budgetRange', budgetRange)}
Primary Purpose: ${formatValue('purpose', purpose)}
Desired Timeline: ${formatValue('timeline', timeline)}

Website Inspiration:
-----------------
${inspiration || 'Not provided'}

Additional Information:
--------------------
${additionalInfo || 'Not provided'}

Consultation Request: ${wantsConsultation ? 'Yes - Client would like a 15-minute consultation' : 'No consultation requested'}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Project Inquiry</h2>
          
          <div style="margin-top: 24px;">
            <h3 style="color: #2d3748; margin-bottom: 16px;">📋 Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          <div style="margin-top: 24px;">
            <h3 style="color: #2d3748; margin-bottom: 16px;">🎯 Project Requirements</h3>
            <p><strong>Website Type:</strong> ${formatValue('websiteType', websiteType)}</p>
            <p><strong>Budget Range:</strong> ${formatValue('budgetRange', budgetRange)}</p>
            <p><strong>Primary Purpose:</strong> ${formatValue('purpose', purpose)}</p>
            <p><strong>Desired Timeline:</strong> ${formatValue('timeline', timeline)}</p>
          </div>

          <div style="margin-top: 24px;">
            <h3 style="color: #2d3748; margin-bottom: 16px;">💡 Website Inspiration</h3>
            <p style="white-space: pre-line;">${inspiration?.replace(/\n/g, '<br>') || 'Not provided'}</p>
          </div>

          <div style="margin-top: 24px;">
            <h3 style="color: #2d3748; margin-bottom: 16px;">📝 Additional Information</h3>
            <p style="white-space: pre-line;">${additionalInfo?.replace(/\n/g, '<br>') || 'Not provided'}</p>
          </div>

          <div style="margin-top: 24px; padding: 16px; background-color: ${wantsConsultation ? '#f0fff4' : '#fff'}; border-radius: 8px; border: 1px solid ${wantsConsultation ? '#9ae6b4' : '#e2e8f0'};">
            <h3 style="color: #2d3748; margin-bottom: 8px;">🤝 Consultation Request</h3>
            <p style="margin: 0;">${wantsConsultation ? '✅ Client would like a 15-minute consultation' : '❌ No consultation requested'}</p>
          </div>
        </div>
      `.trim(),
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Project inquiry email sent successfully:', info.messageId);
      return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (emailError: any) {
      console.error('Error sending project inquiry email:', emailError);
      
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
    console.error('Project inquiry error:', {
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