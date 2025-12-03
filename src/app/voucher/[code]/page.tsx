'use client'

import { useEffect, useState } from 'react'
import { use } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VoucherPage({ params }: { params: Promise<{ code: string }> }) {
  const { code: codeParam } = use(params)
  const [code, setCode] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCode(decodeURIComponent(codeParam))
  }, [codeParam])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      <div className="max-w-2xl mx-auto px-8 py-20">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e7e8ea]/50 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#19395f] mb-6">Your Voucher Code</h1>
          <div className="bg-gradient-to-br from-[#19395f] to-[#0d2440] rounded-xl p-8 mb-6">
            <p className="text-white/90 text-sm uppercase tracking-wider mb-4">Voucher Code</p>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <code className="text-white text-2xl md:text-3xl font-bold font-mono tracking-wider">{code}</code>
            </div>
            <button
              onClick={handleCopy}
              className="bg-white text-[#19395f] px-6 py-3 rounded-lg font-semibold hover:bg-[#80acc9] hover:text-white transition-colors"
            >
              {copied ? '✓ Copied!' : '📋 Copy Code'}
            </button>
          </div>
          <p className="text-gray-600 mb-8">Your code has been copied! Use it when booking your appointment.</p>
          <a
            href="/book-appointment"
            className="inline-block bg-[#19395f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#80acc9] transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

