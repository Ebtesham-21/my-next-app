import { dbConnect } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import mongoose from 'mongoose';

export async function POST(req) {
    try {
        const body = await req.json();
        console.log('Received body:', body);

        const { blogId, name, email, comment } = body;
        console.log('Destructured fields:', { blogId, name, email, comment });

        // Check if any field is missing
        if (!blogId || !name || !email || !comment) {
            return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
        }

        // The rest of your code follows...
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}
