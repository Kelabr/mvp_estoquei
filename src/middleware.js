import { NextResponse } from "next/server";
import { jwtVerify } from "jose";


const secret = process.env.SECRET_KEY
const SECRET = new TextEncoder().encode(secret)




export async function middleware(req){

    const token = req.cookies.get('token')?.value;
    const {pathname} = req.nextUrl

    if(!token && pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if(token){
        const {payload} = await jwtVerify(token, SECRET)
        const isExpired = payload.exp * 1000 < Date.now()

        if(isExpired){
            return NextResponse.redirect(new URL('/login', req.url))
        }

        if(pathname.startsWith('/login') || pathname.startsWith('/register') ){
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }



}

export const config = {
    matcher: ['/dashboard/:path*',  '/login', "/register"], // Protege todas as rotas dentro de /dashboard
};