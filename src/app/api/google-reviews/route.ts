import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your actual Google Places API credentials
    const placeId = process.env.GOOGLE_PLACE_ID || '';
    const apiKey = process.env.GOOGLE_API_KEY || '';

    if (!placeId || !apiKey) {
      return NextResponse.json(
        { error: 'Google Places API credentials not configured' },
        { status: 500 }
      );
    }

    // Fetch reviews from Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Google Reviews');
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}


