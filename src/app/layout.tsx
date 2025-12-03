import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessInfo, seoConfig, getStructuredData } from "@/lib/businessInfo";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#19395f",
};

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website.url),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  
  // OpenGraph
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: businessInfo.website.url,
    siteName: businessInfo.name,
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    images: [
      {
        url: "/eyesite-logo.png",
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} Logo`,
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    images: ["/eyesite-logo.png"],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/favicon-light.png",
  },
  
  // Verification (add your verification codes when available)
  verification: {
    google: "", // Add Google Search Console verification code
    // yandex: "",
    // bing: "",
  },
  
  // Alternate languages (if you add multi-language support)
  alternates: {
    canonical: businessInfo.website.url,
  },
  
  // Category
  category: "Health & Medical Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();
  
  return (
    <html lang="en-GB">
      <head>
        {/* Structured Data for SEO - Local Business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preload Critical Images */}
        <link
          rel="preload"
          as="image"
          href="/hero1.png"
          fetchPriority="high"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/eyesite-logo.png"
          fetchPriority="high"
          type="image/png"
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for third-party resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://embedsocial.com" />
        <link rel="preconnect" href="https://embedsocial.com" crossOrigin="anonymous" />
        
        {/* Optimize viewport for mobile */}
        <meta name="theme-color" content="#19395f" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0d2440" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
