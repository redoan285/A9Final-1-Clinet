import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/appointments/:path*"],
};











// import { NextResponse } from 'next/server'
// import { auth } from './lib/auth'
// import { headers } from 'next/headers'

// export async function middleware(request) {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })
//   if (!session) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
// }

// export const config = {
//   matcher: ['/dashboard', '/appointments/:path*'],
// }
