import { NextResponse } from 'next/server'
import UserModel from '@/models/usermodel'
import { connectToDB } from '@/lib/dbConnect'

export const POST = async (req, res) => {
    const { ...formData } = await req.json();

    try {
        await connectToDB();

        console.log(formData);

        const newUserModel = new UserModel({ ...formData });

        console.log(newUserModel);

        await newUserModel.save();

        const userIdString = newUserModel._id.toString();

        return new Response((userIdString), { status: 200 });

    } catch (err) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
