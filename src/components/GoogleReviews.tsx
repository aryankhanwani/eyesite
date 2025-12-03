'use client'

import { useEffect } from 'react'

export default function GoogleReviews() {
  useEffect(() => {
    // Load EmbedSocial script using their exact pattern
    const scriptId = 'EmbedSocialHashtagScript'
    
    // Check if script already exists (EmbedSocial's check)
    if (document.getElementById(scriptId)) {
      return
    }

    // Create script element
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://embedsocial.com/cdn/ht.js'
    script.async = true
    
    // Append to head
    document.getElementsByTagName('head')[0].appendChild(script)

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f6f8] relative">
      <div className="max-w-7xl mx-auto px-8 z-10">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            TESTIMONIALS
          </span>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-4 leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg text-black/70 max-w-2xl">
            See what our customers are saying about Eyesite Opticians on Google.
          </p>
        </div>

        {/* EmbedSocial Widget */}
        <div className="embedsocial-hashtag" data-ref="294e151b0ff1ffc164991c96cf6d9d7d4d9020de">
          <a 
            className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding" 
            href="https://embedsocial.com/blog/embed-google-reviews/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Embed Google reviews"
          >
            <img 
              src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" 
              alt="EmbedSocial"
            />
            <div className="es-widget-branding-text">Embed Google reviews</div>
          </a>
        </div>
      </div>
    </section>
  )
}

