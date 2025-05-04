import {connectToDB} from '@/lib/mongodb';
import Blog from '@/models/blog';


export async function POST(req){
    try {
        const {blogId, name, email, message} = await req.json();

    if(!blogId || !name || !email || !message) {
        return new Response(JSON.stringify({error: "Missing fields"}), {status: 400});
    }

    await connectToDB();

    const blog = await Blog.findById(blogId);
    if(!blog) {
        return new Response(JSON.stringify({error: "Blog not found"}), {status: 404});
    }

    const newComment = {
        name,
        email,
        message,
        date: new Date().toLocaleDateString(),
    };

    blog.comments.push(newComment);
    blog.comment = blog.comments.length;
    await blog.save();

    return new Response(JSON.stringify({message: "Comment added sucessfully", comment: newComment}), {status: 200});

    
} catch (error) {
    console.error(error);
    return new Response(JSON.stringify({error: "Internal server error"}), {status: 500});
}
}