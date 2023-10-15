import { NextResponse } from 'next/server'
import UserModel from '@/models/usermodel'
import { connectToDB } from '@/lib/dbConnect'

export const POST = async (req, res) => {
    const { username, password } = await req.json();

    try {
        await connectToDB();

        console.log(username, password);

        const findUser = await UserModel.findOne({ username, password });

        if (!findUser) {
            return new Response("Victim Not Found", { status: 404 });
        }
        console.log(findUser);

        return new Response(JSON.stringify({ message: "Login Successful", user_id: findUser._id }), { status: 200 });

    } catch (err) {
        return new Response("Failed to login", { status: 500 });
    }
}
