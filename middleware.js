import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // pretent we get if it's desktop from a cdn
  const CDN_IS_DESKTOP = true;
  // pretend that we check and rewrite the url.
  return NextResponse.rewrite(new URL("/no_problem/desktop", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/no_problem/:path*",
};
