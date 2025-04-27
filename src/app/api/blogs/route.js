import dbConnect from "../../../../lib/mongodb";
import Blog from "../../../../models/Blog";

export async function POST(req) {
    await dbConnect();
    const data = await req.json();
    const blog = await Blog.create(data);
    return new Response(JSON.stringify(blog), {status: 201});
}

export async function GET(){
    await dbConnect();
    const blogs = await Blog.find().sort ({createdAt: -1});
    return new Response(JSON.stringify(blogs));
}