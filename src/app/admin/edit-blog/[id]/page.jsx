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
        
    }
}