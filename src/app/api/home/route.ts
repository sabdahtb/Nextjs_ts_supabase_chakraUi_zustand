import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET() {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  // const { data } = await supabase.auth.signInWithPassword({
  //   email: '',
  //   password: '',
  // })

  const { data } = await supabase.auth.getUser()

  return NextResponse.json({ data })
}
