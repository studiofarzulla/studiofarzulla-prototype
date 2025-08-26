import { NextRequest, NextResponse } from 'next/server';

// Removed edge runtime to fix Vercel deployment issues
// export const runtime = 'edge';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, number>();

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  category: string;
  message: string;
  preferredContact?: string;
  newsletter?: boolean;
}

function cleanupRateLimit() {
  const now = Date.now();
  for (const [key, timestamp] of rateLimitMap.entries()) {
    if (now - timestamp > 60000) { // 1 minute
      rateLimitMap.delete(key);
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Rate limiting: 5 requests per minute per IP
    cleanupRateLimit();
    const lastRequest = rateLimitMap.get(ip);
    if (lastRequest && Date.now() - lastRequest < 12000) { // 12 seconds between requests
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, Date.now());

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message || !body.subject) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10 || body.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      );
    }

    // In production, integrate with email service (SendGrid, Resend, etc.)
    // For now, we'll prepare the email data
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'info@farzulla.org',
      from: 'noreply@farzulla.org',
      replyTo: body.email,
      subject: `[CBH Contact] ${body.category}: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        <p><strong>Category:</strong> ${body.category}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Preferred Contact:</strong> ${body.preferredContact || 'Email'}</p>
        <p><strong>Newsletter:</strong> ${body.newsletter ? 'Yes' : 'No'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from: ${ip} at ${new Date().toISOString()}</small></p>
      `,
      text: `
        New Contact Form Submission
        
        From: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        ${body.phone ? `Phone: ${body.phone}` : ''}
        Category: ${body.category}
        Subject: ${body.subject}
        Preferred Contact: ${body.preferredContact || 'Email'}
        Newsletter: ${body.newsletter ? 'Yes' : 'No'}
        
        Message:
        ${body.message}
        
        Sent from: ${ip} at ${new Date().toISOString()}
      `
    };

    // Store submission in database (when available)
    const submission = {
      id: crypto.randomUUID(),
      ...body,
      ip,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Send email notification (integrate with email service)
    if (process.env.SENDGRID_API_KEY) {
      // TODO: Implement SendGrid integration
      console.log('Email would be sent:', emailData);
    } else if (process.env.RESEND_API_KEY) {
      // TODO: Implement Resend integration
      console.log('Email would be sent:', emailData);
    } else {
      // Log for development
      console.log('Contact form submission:', submission);
    }

    // Send auto-reply to user
    const autoReplyData = {
      to: body.email,
      from: 'noreply@farzulla.org',
      subject: 'Thank you for contacting The Crescent Beach Hotel',
      html: `
        <h2>Thank You for Your Message</h2>
        <p>Dear ${body.firstName},</p>
        <p>We have received your message and appreciate you taking the time to contact us.</p>
        <p>Our team will review your inquiry and respond within 24-48 hours.</p>
        <p><strong>Your submission details:</strong></p>
        <ul>
          <li>Subject: ${body.subject}</li>
          <li>Category: ${body.category}</li>
          <li>Submitted: ${new Date().toLocaleDateString()}</li>
        </ul>
        <p>If you need immediate assistance, please call us at +994 123 456 789.</p>
        <br>
        <p>Best regards,<br>The Crescent Beach Hotel Team</p>
      `
    };

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will respond within 24-48 hours.',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'Contact API is running',
    timestamp: new Date().toISOString()
  });
}