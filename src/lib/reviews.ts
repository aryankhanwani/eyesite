// Manual Google Reviews Entry
// Update this file periodically with reviews from your Google Business Profile
// This is completely free and doesn't require any API keys

export interface Review {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time?: number
}

// Add your Google reviews here manually
// You can copy them from your Google Business Profile
export const googleReviews: Review[] = [
  // Example format - replace with your actual reviews:
  // {
  //   author_name: "Customer Name",
  //   profile_photo_url: "https://...", // Optional: Google profile photo URL
  //   rating: 5,
  //   relative_time_description: "2 weeks ago",
  //   text: "Great service! The staff was very helpful and professional.",
  // },
  
  // Add your reviews below:
]

