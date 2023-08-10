import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  console.log({ body })

  const data = { nama: 'sabda' }

  return NextResponse.json({ data })
}
