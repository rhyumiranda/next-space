import { redirect } from "next/navigation";
import NextAuth from "next-auth"; 
import { NextResponse } from "next/server";
import authConfig from "../auth.config";

import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix } from "../route";

export const { auth } = NextAuth( authConfig );
// import { auth } from "../auth";

export default auth(( req ) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  console.log(isLoggedIn);
  

  if(isApiAuthRoute){
    return NextResponse.next();
  }

  if( isAuthRoute ){
    if( isLoggedIn ){
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if(!isLoggedIn && !isPublicRoute){
    return NextResponse.redirect(new URL('/api/auth/signin', nextUrl))
  }

  if(isLoggedIn && nextUrl.pathname === '/api/content'){
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    
  }

  return NextResponse.next();
})

export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',]
}

