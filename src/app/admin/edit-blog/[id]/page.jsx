'use client';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRouter, useParams} from 'next/navigation';

const EditBlog = () => {
    const [formDataState, setFormData] = useState(null);
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
        setFormData({...formDataState, [e.target.name]: e.target.value});
        
    }

    async function handleImageUploadScreens(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        const res = await axios.post('/api/upload', formData);
        setFormData(prev => ({...prev, screens: res.data.secure_url}));
    }

    async function handleImageUploadSingle(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        const res = await axios.post('/api/upload', formData);
        setFormData(prev => ({...prev, blogSingleImg: res.data.secure_url}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch(`/api/blogs/${params.id}`, {
            method: 'Patch',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataState),
        });
        router.push('/admin/dashboard');
    }

    if(!formData) return <div className='p-6' > Loading...</div>;

    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input type="text" name="title" value={formDataState.title} onChange={handleChange} className="p-2 border rounded" />
            <textarea name="description" value={formDataState.description} onChange={handleChange} className="p-2 border rounded" rows="5" />
            <input type="text" name="author" value={formDataState.author} onChange={handleChange} className="p-2 border rounded" />
            <input type="text" name="create_at" value={formDataState.create_at} onChange={handleChange} className="p-2 border rounded" />
            <input type="text" name="comment" value={formDataState.comment} onChange={handleChange} className="p-2 border rounded" />
            <input type="text" name="thumb" value={formDataState.thumb} onChange={handleChange} className="p-2 border rounded" />
    
            {/* Current Images */}
            <div>
              <p className="text-gray-600 mb-1">Current Blog Preview Image:</p>
              {formDataState.screens && <img src={formDataState.screens} alt="preview" className="w-40 h-24 object-cover rounded" />}
              <input type="file" accept="image/*" onChange={handleImageUploadScreens} className="mt-2" />
            </div>
    
            <div>
              <p className="text-gray-600 mb-1">Current Blog Single Image:</p>
              {formDataState.blogSingleImg && <img src={formDataState.blogSingleImg} alt="single" className="w-40 h-24 object-cover rounded" />}
              <input type="file" accept="image/*" onChange={handleImageUploadSingle} className="mt-2" />
            </div>
    
            <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
              Update Blog
            </button>
          </form>
        </div>
      );
    };
    
    export default EditBlog;