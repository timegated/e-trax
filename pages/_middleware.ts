// This always fires first

import { NextResponse } from "next/server";

// Create list of pages we want to protect
const signedInPages = [
  '/',
  '/playlist',
  '/library',
];

// We are now in a WebWorker environment
// Working only with the request and response objects, limited on purpose for speed
export default function middleware (req) {
  if(signedInPages.find(p => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if(!token) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  }
}
