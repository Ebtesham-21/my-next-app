import { NextResponse } from 'next/server';
import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function DELETE(req) {
    try {
        await connectDB();
        const {blogId, commentId} = await req.json();

        const blog = await Blog.findById(blogId);
        if (!blog) return NextResponse.json({message: "Blog not found"}, {status: 404});

        blog.comments = blog.comments.filter(c => c._id.toString() !== commentId);
        await blog.save();

        return NextResponse.json({message: "Comment deleted sucessfully"});


    } catch (error) {
        return NextResponse.json({message: "Server error", error}, {status: 500});
    }
}