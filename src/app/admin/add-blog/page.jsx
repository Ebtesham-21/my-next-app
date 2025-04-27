'use client';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        create_at: '',
        comment: '',
        screens: '',
        blogSingleImg: '',
        thumb: '',
    });

    const router = useRouter();

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        router.push('/admin/dashboard');
            
        
    }

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-6'>
                Add New Blog

            </h1>

            <form onSubmit={handleSubmit} className='grid gap-4'>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="p-2 border rounded" />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} required className="p-2 border rounded" />
                <input type="text" name="author" placeholder="Author" onChange={handleChange} required className="p-2 border rounded" />
                <input type="text" name="create_at" placeholder="Date (e.g., 25 Apr, 2025)" onChange={handleChange} required className="p-2 border rounded" />
                <input type="text" name="comment" placeholder="Comment Count" onChange={handleChange} required className="p-2 border rounded" />
                <input type="text" name="thumb" placeholder="Category / Thumb" onChange={handleChange} required className="p-2 border rounded" />
                <input type="url" name="screens" placeholder="Screens Image URL (Cloudinary)" onChange={handleChange} required className="p-2 border rounded" />
                <input type="url" name="blogSingleImg" placeholder="Single Blog Image URL (Cloudinary)" onChange={handleChange} required className="p-2 border rounded" />


                <button type="submit" className='bg-green-600 text-white px-4 py-2 rounded'>
                    Add Blog
                </button>


            </form>



        </div>
    );

};

export default AddBlog;