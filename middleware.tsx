export { default } from 'next-auth/middleware';

// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export default withAuth(function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname.startsWith('/user')) {

//   }
// }, {
//   callbacks: {
//     authorized: ({ token }) => !!token,
//   },
// });

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/api')) {
//     console.log(request.nextUrl.pathname);
//     return NextResponse.json('this middleware was called');
//   }
// }
export const config = {
  matcher: ['/user/:path*', '/api'],
};
