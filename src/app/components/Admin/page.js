'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
    }

    // Fetch blogs to display under "View Comments"
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      }
    };

    fetchBlogs();
  }, []);

  function handleLogout() {
    localStorage.removeItem('isAdminLoggedIn');
    router.push('/admin/login');
  }

  return (
    <div className='flex bg-[#090909] min-h-screen text-white'>
      {/* sidebar */}
      <div className='w-64 bg-[#090909] min-h-screen text-white shadow-md pt-16 px-8 space-y-6'>
        <h2 className='text-2xl font-bold'>Admin Panel</h2>
        <nav className='space-y-4'>
          <Link href="/admin/dashboard" className='block text-white hover:text-blue-600'>
            Dashboard
          </Link>
          <Link href="/admin/add-blog" className='block text-white hover:text-blue-600'>
            Add Blog
          </Link>

          {/* <div>
            <p className='text-sm text-gray-400 mb-1'>View Comments</p>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <Link key={blog._id} href={`/admin/view-comments/${blog._id}`}>
                <span className='block text-white text-sm hover:text-blue-500 ml-2'>
                    {blog.title.length > 25 ? blog.title.slice(0, 25) + '…' : blog.title}
                </span>
                </Link>

              ))
            ) : (
              <p className='text-xs text-gray-500 ml-2'>No blogs yet</p>
            )}
          </div> */}

          <button
            onClick={handleLogout}
            className='block text-left text-red-500 hover:text-red-700 mt-4'
          >
            Logout
          </button>
        </nav>
      </div>

      {/* main content */}
      <main className='flex-1 p-10'>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
