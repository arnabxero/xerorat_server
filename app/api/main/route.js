
import { NextResponse } from 'next/server'
import RATModel from '@/models/ratmodel'
import { connectToDB } from '@/lib/dbConnect'


export const POST = async (req, res) => {
    const { ...formData } = await req.json();

    try {

        await connectToDB();

        const newRATModel = new RATModel({ formData: formData });

        console.log(newRATModel);

        await newRATModel.save();

        return new Response(JSON.stringify({ message: "API Success", newRATModel }), { status: 200 });

    } catch (err) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}