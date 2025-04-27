import {dbConnect} from "@/lib/mongodb";
import Blog from '@/models/Blog';

export async function DELETE(req, {params}) {
    await dbConnect();
    await Blog.findByIdAndDelete(params.id);
    return new Response(null, {status: 204});
}

export async function PATCH(req, {params}) {
    await dbConnect();
    const updates = await req.json();
    const blog = await Blog.findByIdAndUpdate(params.id, updates, {new: true});
    return new Response(JSON.stringify(blog));
}