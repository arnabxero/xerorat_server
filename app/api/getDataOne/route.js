import { connectToDB } from '@/lib/dbConnect';
import RATModel from '@/models/ratmodel';

export const POST = async (req, res) => {
    const { userid } = await req.json();

    console.log(userid);

    try {
        await connectToDB();

        // Extract the userid from the JSON payload


        // Use the extracted userid in your query or processing
        const oneRatModel = await RATModel.findOne({ _id: userid });

        // Create the response with Cache-Control header
        const response = new Response(
            JSON.stringify({ message: 'API POST Success one', oneRatModel }),
            { status: 200 }
        );

        // Add Cache-Control: no-cache header
        response.headers.set('Cache-Control', 'no-store');

        return response;
    } catch (err) {
        // Create the error response with Cache-Control header
        const errorResponse = new Response(JSON.stringify({ message: 'API POST Fail' }), {
            status: 500,
        });

        // Add Cache-Control: no-cache header
        errorResponse.headers.set('Cache-Control', 'no-cache');

        return errorResponse;
    }
}

export const revalidate = 1;