'use client'

import { useEffect, useRef, useState } from 'react'

export default function GoogleReviews() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Only load widget when user scrolls to the section or after a delay
    // This prevents tracking on initial page load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadWidget) {
            // Only load when section is visible
            setShouldLoadWidget(true)
          }
        })
      },
      {
        rootMargin: '100px', // Start loading 100px before it comes into view
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Fallback: Load after user interaction (click, scroll, etc.)
    const handleUserInteraction = () => {
      if (!shouldLoadWidget) {
        setShouldLoadWidget(true)
      }
    }

    // Listen for user interactions
    window.addEventListener('scroll', handleUserInteraction, { once: true, passive: true })
    window.addEventListener('click', handleUserInteraction, { once: true })
    window.addEventListener('touchstart', handleUserInteraction, { once: true })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      window.removeEventListener('scroll', handleUserInteraction)
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [shouldLoadWidget])

  useEffect(() => {
    // Only load Elfsight script when widget should be loaded
    if (!shouldLoadWidget) {
      return
    }

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
      if (existingScript && !shouldLoadWidget) {
        existingScript.remove()
      }
    }
  }, [shouldLoadWidget])

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-[#f4f6f8] relative">
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

        {/* Elfsight Google Reviews Widget - Only loads when user interacts */}
        {shouldLoadWidget ? (
          <div className="w-full" style={{ clipPath: 'inset(0 0 5% 0)' }}>
            <div 
              className="elfsight-app-858696bd-6a8f-40df-8f64-79eaa6409d69" 
              data-elfsight-app-lazy
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Loading reviews...</p>
          </div>
        )}
      </div>
    </section>
  )
}

