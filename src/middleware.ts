import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth-token-service'
import { DASHBOARD_PAGES } from './config/pages-url.config'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isLoginPage = url.includes('/login')
  const isRegisterPage = url.includes('/register')

  if ((isLoginPage || isRegisterPage) && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
  }

  if (isLoginPage || isRegisterPage) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()

  //   if production, add a check for the user role
  //   if admin page , redirect to 404 page
}

export const config = {
  matcher: ['/login', '/register'],
}
