import { NextResponse } from 'next/server'
import { googleReviews } from '@/lib/reviews'

// Free option: Return manually entered reviews
export async function GET() {
  try {
    // If manual reviews exist, return them
    if (googleReviews && googleReviews.length > 0) {
      return NextResponse.json({
        reviews: googleReviews,
        rating: googleReviews.reduce((sum, r) => sum + r.rating, 0) / googleReviews.length,
        totalRatings: googleReviews.length,
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      })
    }

    // Optional: Try Google Places API if API key is configured
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJqebQ4BFDeUgRJ2vCotsh_P4'

    if (apiKey) {
      try {
        const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/details/json'
        const url = `${GOOGLE_PLACES_API_URL}?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
        
        const response = await fetch(url, {
          next: { revalidate: 3600 }, // Cache for 1 hour
        })

        if (response.ok) {
          const data = await response.json()

          if (data.status === 'OK' && data.result?.reviews) {
            const reviews = data.result.reviews.map((review: any) => ({
              author_name: review.author_name,
              author_url: review.author_url,
              profile_photo_url: review.profile_photo_url,
              rating: review.rating,
              relative_time_description: review.relative_time_description,
              text: review.text,
              time: review.time,
            }))

            return NextResponse.json({
              reviews,
              rating: data.result.rating || 0,
              totalRatings: data.result.user_ratings_total || 0,
            }, {
              headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
              },
            })
          }
        }
      } catch (error) {
        console.error('Google Places API error:', error)
        // Fall through to return empty array
      }
    }

    // Return empty if no reviews configured
    return NextResponse.json({
      reviews: [],
      rating: 0,
      totalRatings: 0,
    })
  } catch (error: any) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}
