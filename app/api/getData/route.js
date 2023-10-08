import { connectToDB } from '@/lib/dbConnect'
import { NextResponse } from 'next/server'
import RATModel from '@/models/ratmodel'

export const GET = async (req, res) => {

    try {

        await connectToDB();

        const allRatModels = await RATModel.find().sort({ updatedAt: -1 });

        return NextResponse.json({ message: 'get the uid', allRatModels }, { status: 200 });

    } catch (err) {
        return NextResponse.json({ message: 'Create Class Failed' }, { status: 500 });
    }
}