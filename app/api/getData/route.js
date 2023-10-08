import { connectToDB } from '@/lib/dbConnect'
import { NextResponse } from 'next/server'
import RATModel from '@/models/ratmodel'

export const GET = async (req, res) => {
    try {
        await connectToDB();

        const allRatModels = await RATModel.find().sort({ updatedAt: -1 });

        // Create the response with Cache-Control header
        const response = new Response(JSON.stringify({ message: "API GET Success", allRatModels }), { status: 200 });

        // Add Cache-Control: no-cache header
        response.headers.set('Cache-Control', 'no-store');

        return response;

    } catch (err) {
        // Create the error response with Cache-Control header
        const errorResponse = new Response(JSON.stringify({ message: "API GET Fail" }), { status: 500 });

        // Add Cache-Control: no-cache header
        errorResponse.headers.set('Cache-Control', 'no-cache');

        return errorResponse;
    }
}

export const revalidate = 1;