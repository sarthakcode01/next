import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const userPath = request.url
    const token = request.cookies.get("logger")
    // console.log(token)

    
    if (userPath == "http://localhost:3000/profile" && !token) {
        return NextResponse.redirect(new URL('/contact/login', request.url))
    }



    // else {
    //     return NextResponse.redirect(new URL('/contact/login', request.url))
    // }

    //   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/profile/:path*',
}


