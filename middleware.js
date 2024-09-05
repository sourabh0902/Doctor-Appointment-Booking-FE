import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    const originalUrl = encodeURIComponent(request.url); // This line creates a new URL string that is a safe version of the original requested URL. It uses the encodeURIComponent function to encode any special characters in the URL.
    console.log(`/api/auth/login?post_login_redirect_url=${originalUrl}`)
    return NextResponse.redirect(
      new URL(
        `/api/auth/login?post_login_redirect_url=${originalUrl}`,
        request.url
      )
    ); // This line creates a new URL that redirects the user to the login page. The post_login_redirect_url query parameter contains the original requested URL, so the user can be redirected back to their original destination after logging in.
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/details/:path*"],
};
