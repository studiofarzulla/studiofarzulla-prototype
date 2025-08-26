import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// On-demand revalidation endpoint for ISR
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, secret } = body;

    // Check for secret to secure the revalidation endpoint
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    if (!path) {
      return NextResponse.json(
        { message: 'Path is required' },
        { status: 400 }
      );
    }

    // Revalidate the specified path
    revalidatePath(path);

    return NextResponse.json(
      {
        message: `Path ${path} revalidated successfully`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating path' },
      { status: 500 }
    );
  }
}

// Configuration for the serverless function
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';