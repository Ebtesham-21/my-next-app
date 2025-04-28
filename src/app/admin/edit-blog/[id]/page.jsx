'use client';
import React, {useEffect, useState} from 'react';
import {useRouter, useParams} from 'next/navigation';

const EditBlog = () => {
    const [formData, setFormData] = useState(null);
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        async function fetchBlog() {
            const res = await fetch(`/api/blogs`);
            const blogs = await res.json();
            const blog = blogs.find(item => item._id === params.id);
            setFormData(blog);
        }
        fetchBlog();
    }, [params.id]);

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
        
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch(`/api/blogs/${params.id}`, {
            method: 'Patch',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        router.push('/admin/dashboard');
    }

    if(!formData) return <div className='p-6' > Loading...</div>;

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-6'>
                Edit Blog
            </h1>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="p-2 border rounded" />
                <input type="text" name="description" value={formData.description} onChange={handleChange} className="p-2 border rounded" />
                <input type="text" name="author" value={formData.author} onChange={handleChange} className="p-2 border rounded" />
                <input type="text" name="create_at" value={formData.create_at} onChange={handleChange} className="p-2 border rounded" />
                <input type="text" name="comment" value={formData.comment} onChange={handleChange} className="p-2 border rounded" />
                <input type="text" name="thumb" value={formData.thumb} onChange={handleChange} className="p-2 border rounded" />
                <input type="url" name="screens" value={formData.screens} onChange={handleChange} className="p-2 border rounded" />
                <input type="url" name="blogSingleImg" value={formData.blogSingleImg} onChange={handleChange} className="p-2 border rounded" />

                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                Update Blog
                </button>
      </form>
    </div>
  );
};

export default EditBlog;