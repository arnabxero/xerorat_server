import { connectToDB } from '@/lib/dbConnect'
import { NextResponse } from 'next/server'
import RATModel from '@/models/ratmodel'

export const GET = async (req, res) => {

    try {

        await connectToDB();

        const allRatModels = await RATModel.find().sort({ updatedAt: -1 });

        return new Response(JSON.stringify({ message: "API GET SUccess", allRatModels }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ message: "API GET Fail" }), { status: 200 });
    }
}