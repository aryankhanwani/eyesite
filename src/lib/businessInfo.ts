// Business Information Configuration
// Centralized location for all business contact details and information

export const businessInfo = {
  name: "Eyesite Opticians",
  tagline: "Expert Eye Care in Leeds",
  description: "Expert eye care services and premium eyewear solutions for clearer vision and better eye health. Serving Leeds with professional optometry services since years.",
  
  contact: {
    phone: "+44 113 260 0063",
    phoneDisplay: "0113 260 0063",
    email: "eyesiteopticianshalton@gmail.com",
    address: {
      street: "198 Selby Rd, Halton",
      city: "Leeds",
      postcode: "LS15 0LF",
      country: "United Kingdom",
      full: "198 Selby Rd, Halton, Leeds LS15 0LF, United Kingdom"
    }
  },
  
  hours: {
    weekdays: "9:00 AM - 5:30 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed",
    note: "Emergency appointments available outside hours"
  },
  
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
  
  google: {
    rating: 4.9,
    reviews: 10,
    placeId: "ChIJqebQ4BFDeUgRJ2vCotsh_P4", // Extracted from embed URL
    mapsUrl: "https://maps.app.goo.gl/3kvfR1APCJhki4Qh7",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6187032991083!2d-1.4717564869571846!3d53.796273640847744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487943115e0ed6a9%3A0xfe4c21bda2c46b27!2sEyesite%20Opticians!5e0!3m2!1sen!2sin!4v1764579953152!5m2!1sen!2sin"
  },
  
  website: {
    url: "https://www.eyesiteopticians.com",
    domain: "eyesiteopticians.com"
  }
};

// SEO Configuration
export const seoConfig = {
  defaultTitle: "Eyesite Opticians | Expert Eye Care in Leeds",
  titleTemplate: "%s | Eyesite Opticians Leeds",
  description: "Professional optometry services in Leeds. Comprehensive eye exams, designer eyewear, contact lenses, and specialist eye care treatments. NHS & private appointments available.",
  keywords: [
    "opticians Leeds",
    "eye exams Leeds",
    "eyewear Leeds",
    "contact lenses Leeds",
    "eye care Leeds",
    "designer glasses Leeds",
    "NHS eye test Leeds",
    "CUES service Leeds",
    "dry eye treatment Leeds",
    "Halton opticians",
    "Selby Road opticians"
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Eyesite Opticians",
  },
  twitter: {
    card: "summary_large_image",
  }
};

// Structured Data for SEO
export const getStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessInfo.website.url,
    "name": businessInfo.name,
    "description": businessInfo.description,
    "url": businessInfo.website.url,
    "telephone": businessInfo.contact.phone,
    "email": businessInfo.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.contact.address.street,
      "addressLocality": businessInfo.contact.address.city,
      "postalCode": businessInfo.contact.address.postcode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.8047",
      "longitude": "-1.4119"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessInfo.google.rating.toString(),
      "reviewCount": businessInfo.google.reviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "££",
    "image": `${businessInfo.website.url}/eyesite-logo.png`,
    "sameAs": Object.values(businessInfo.social).filter(url => url !== "")
  };
};

