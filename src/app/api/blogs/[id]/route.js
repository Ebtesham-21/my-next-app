import { dbConnect } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";
import {Types} from "mongoose";

export async function DELETE(req, { params }) {
  try {
    await dbConnect();

    const deletedBlog = await Blog.findByIdAndDelete(params.id);

    if (!deletedBlog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PATCH(req, { params }) {
  try {
    await dbConnect();
    const updates = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(params.id, updates, {
      new: true,
    });

    if (!updatedBlog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(updatedBlog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function GET(req, {params}) {
  const { id } = params;

  if (!Types.ObjectId.isValid(id)) {
    return new Response(JSON.stringify({error: "Invalid blog ID"}), {status: 400});
  }

  try {
    const blog = await Blog.findById(id);
    if(!blog) {
      return new Response(JSON.stringify({error: "Blog not found"}), {status: 404});

    }

    return new Response(JSON.stringify(blog), {status: 200});
  } catch (error) {
    return new Response(JSON.stringify({error: 'Server error'}), {status: 500});
  }
}