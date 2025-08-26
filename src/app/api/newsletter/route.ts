import { NextRequest, NextResponse } from 'next/server';

// Removed edge runtime to fix Vercel deployment issues
// export const runtime = 'edge';

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory store (in production, use database)
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const { email, preferences = {} } = await request.json();

    // Validate email
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json(
        { 
          success: false,
          message: 'This email is already subscribed to our newsletter' 
        },
        { status: 409 }
      );
    }

    // Add to subscribers (in production, save to database)
    subscribers.add(email.toLowerCase());

    // Log subscription (in production, save to database with preferences)
    const subscription = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      preferences: {
        promotions: preferences.promotions ?? true,
        events: preferences.events ?? true,
        news: preferences.news ?? true,
        ...preferences
      },
      source: request.headers.get('referer') || 'direct',
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    };

    console.log('New newsletter subscription:', subscription);

    // Send welcome email (integrate with email service)
    const welcomeEmail = {
      to: email,
      subject: 'Welcome to The Crescent Beach Hotel Newsletter',
      html: `
        <h2>Welcome to Our Newsletter!</h2>
        <p>Thank you for subscribing to The Crescent Beach Hotel newsletter.</p>
        <p>You'll receive:</p>
        <ul>
          <li>Exclusive offers and promotions</li>
          <li>Updates about upcoming events</li>
          <li>Travel tips and local insights</li>
          <li>Special member-only rates</li>
        </ul>
        <p>As a welcome gift, enjoy <strong>10% off</strong> your next stay with code: <strong>WELCOME10</strong></p>
        <br>
        <p>Best regards,<br>The Crescent Beach Hotel Team</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          You can unsubscribe at any time by clicking the link in our emails.
        </p>
      `
    };

    // TODO: Send actual email when email service is configured
    console.log('Would send welcome email:', welcomeEmail);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      welcomeCode: 'WELCOME10'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Remove from subscribers
    const wasSubscribed = subscribers.delete(email.toLowerCase());

    if (!wasSubscribed) {
      return NextResponse.json(
        { 
          success: false,
          message: 'This email is not subscribed to our newsletter' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from our newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Get subscription status
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address' },
      { status: 400 }
    );
  }

  const isSubscribed = subscribers.has(email.toLowerCase());

  return NextResponse.json({
    email: email.toLowerCase(),
    subscribed: isSubscribed,
    totalSubscribers: subscribers.size
  });
}