
import { NextResponse } from 'next/server'


export const POST = async (req, res) => {
    const { ...formData } = await req.json();

    try {

        return new Response(JSON.stringify({ message: "API Success", formData }), { status: 200 });

    } catch (err) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}