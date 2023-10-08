import { NextResponse } from 'next/server'

export async function middleware(request) {
    console.log('------------ Middle Middleware --------------------');

    return NextResponse.next();

}

export const config = {
    matcher: '/:path*',
}