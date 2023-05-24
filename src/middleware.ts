import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('미들웨어 실행중')
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로로 리다이렉트 함')
    return NextResponse.redirect(new URL('/products', request.url))
  }
}

export const config = {
  // products 혹은 그 뒤에 오는 모든 경로에 대해서만 수행되도록
  matcher: ['/products/:path*'],
}
