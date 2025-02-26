import { NextResponse } from "next/server";

export function middleware(req){

    const token = req.cookies.get('token');
    const {pathname} = req.nextUrl

    if(!token && pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/login', req.url))
    }
}