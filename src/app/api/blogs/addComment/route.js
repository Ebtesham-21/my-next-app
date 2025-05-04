import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";

import Blog from "@/models/Blog"; 

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { blogId, name, email, comment } = body;

    if (!blogId || !name || !email || !comment) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Push the new comment into the comments array
    blog.comments.push({
      blogId,  
      name,
      email,
      message: comment,
    });

    await blog.save();

    return NextResponse.json({ message: "Comment added successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
