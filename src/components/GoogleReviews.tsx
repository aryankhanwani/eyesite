'use client'

import { useEffect } from 'react'

export default function GoogleReviews() {
  useEffect(() => {
    // Load Elfsight platform script
    const scriptId = 'elfsight-platform-script'
    
    // Check if script already exists
    if (document.getElementById(scriptId)) {
      return
    }

    // Create script element
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://elfsightcdn.com/platform.js'
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

        {/* Elfsight Google Reviews Widget */}
        <div className="w-full" style={{ clipPath: 'inset(0 0 5% 0)' }}>
          <div 
            className="elfsight-app-858696bd-6a8f-40df-8f64-79eaa6409d69" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}

