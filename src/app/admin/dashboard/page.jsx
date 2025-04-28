"use client";
import AdminLayout from '@/app/components/Admin/page.js';
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    const router = useRouter();


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
            toast.success('Blog deleted successfully!');
        } else {
            toast.error('Failed to delete blog!');
        }
    }

     useEffect(() => {
            if (typeof window !== 'undefined') {
                const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
                if(!isLoggedIn) {
                    router.push('/admin/login');
                }
            }
        }, []);


        // pagination  logic
        const indexOfLastBlog = currentPage * blogsPerPage;
        const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
        const currentBlogs = blogs.slice(indexOfFirstBlog,  indexOfLastBlog);
        const totalPages = Math.ceil(blogs.length / blogsPerPage);

        function paginate(pageNumber) {
            setCurrentPage(pageNumber);
        }

    return (
    <AdminLayout>
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

                        <button
                            onClick={() => {
                                localStorage.removeItem('isAdminLoggedIn');
                                router.push('/admin/login');
                            }}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                        Logout
                        </button>



                    </div>
                ))}

            </div>

        </div>
    </AdminLayout>
    );
    
};

export default Dashboard;