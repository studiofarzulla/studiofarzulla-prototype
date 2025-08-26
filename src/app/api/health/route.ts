import { NextResponse } from 'next/server';

// Simple health check endpoint that demonstrates Vercel serverless functions
export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      message: 'Crescent Beach Hotel API is running on Vercel',
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=60, s-maxage=60',
      },
    }
  );
}

// Configuration for the serverless function
export const runtime = 'edge';
export const dynamic = 'force-dynamic';