"use client";

import AdminLayout from '@/app/components/Admin/page.js';
import React, { useEffect, useState } from 'react';
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
    if (confirm("Are you sure you want to delete this blog?")) {
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
      if (!isLoggedIn) {
        router.push('/admin/login');
      }
    }
  }, []);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleLogout() {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin/login');
  }

  return (
    <AdminLayout>
      <div className="p-6  sm:p-6 bg-[#090909] min-h-screen text-white" >
        <div className="flex flex-col sm:flex-grow  justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/admin/add-blog" className="bg-[#F97316] text-white px-4 py-2 rounded text-center">
              Add New Blog
            </Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {currentBlogs.map(blog => (
            <div key={blog._id} className="p-4 border rounded shadow">
              <h2 className="text-lg sm:text-xl font-bold">{blog.title}</h2>
              <p className='text-sm text-gray-400'>{blog.author} | {blog.create_at}</p>
              <div className="flex flex-row sm:flex-row gap-2 sm:gap-4 mt-3">
                <Link href={`/admin/edit-blog/${blog._id}`} className="text-blue-600 underline">
                  Edit
                </Link>
                <button onClick={() => deleteBlog(blog._id)} className="text-red-600 underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded text-sm sm:text-base ${
                currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
