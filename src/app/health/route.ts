import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'eyesite-email-api',
    time: new Date().toISOString(),
  })
}
