import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f6f8]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Tag */}
            <div>
              <span className="inline-block bg-[#19395f] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                ABOUT US
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-tight">
              Expert Eye Care Services That Transform Your Vision
            </h2>

            {/* Description */}
            <p className="text-lg text-black/70 leading-relaxed">
              We are dedicated to providing comprehensive eye care solutions that enhance your vision 
              and protect your eye health. Our experienced team combines advanced technology with 
              personalized care to deliver exceptional results.
            </p>

            {/* List of Services */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base text-black/70">
                  Comprehensive Eye Examinations - Advanced diagnostic technology for accurate vision assessment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base text-black/70">
                  Premium Eyewear Collection - Stylish frames and lenses from leading brands worldwide
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#19395f] flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base text-black/70">
                  Expert Optometrists - Experienced professionals dedicated to your vision health
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section - Image with Overlays */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/about-us.png"
                  alt="Eyesite Opticians team providing expert eye care services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Overlaid Text Bubbles */}
              <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-10">
                <div className="bg-[#19395f] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  EXPERT CARE
                </div>
                <div className="bg-[#80acc9] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  ADVANCED TECHNOLOGY
                </div>
                <div className="bg-[#b6dfe8] text-[#19395f] px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  PERSONALIZED SERVICE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

