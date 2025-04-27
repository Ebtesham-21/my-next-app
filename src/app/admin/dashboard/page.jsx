"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchBlogs() {
            const res = await fetch('/api/blogs');
            const data = await res.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, []);

    async function deleteBlog(id) {
        if(confirm("Are you sure you want to delete this blog?")) {
            await fetch(`/api/blogs/${id}`, {
                method: 'DELETE',
            });
            setBlogs(blogs.filter(blog => blog._id !== id));
        }
    }

    return (
        <div className='p-6'>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-3xl font-bold'>
                    Admin Dashboard
                </h1>
                <Link href="admin/add-blog" className='bg-blue-600 text-white px-4 py-2 rounded'>
                    Add New Blog
                </Link>

            </div>

            <div className='grid gap-6'>
                {blogs.map(blog => (
                    <div key={blog._id} className='p-4 border rounded shadow'>
                        <h2 className='text-xl font-bold'>
                            {blog.title}
                        </h2>
                        <p>
                            {blog.author} | {blog.create_at}
                        </p>
                        <div className='flex gap-4 mt-2'>
                            <Link href={`/admin/edit-blog/${blog._id}`} className='text-blue-600 underline' >
                                Edit
                            </Link>
                            <button onClick={() => deleteBlog(blog._id)} className='text-red-600 underline'>
                                Delete
                            </button>
                        </div>


                    </div>
                ))}

            </div>

        </div>
    );
    
};

export default Dashboard;