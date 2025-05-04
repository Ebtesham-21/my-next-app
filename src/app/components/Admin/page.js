'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

const AdminLayout = ({children}) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
        if(!isLoggedIn) {
            router.push('/admin/login');
        }


    }, []);

    function handleLogout() {
        localStorage,removeItem('isAdminLoggedIn');
        router.push('/admin/login');
    }


    return (
        <div className=' flex bg-[#090909] min-h-screen text-white'>
            {/* sidebar */}
            <div className='w-64 bg-[#090909] min-h-screen  text-white shadow-md pt-16 px-8 space-y-6'>
                <h2 className='text-2xl font-bold'>Admin Panel</h2>
                <nav className='space-y-4'>
                    <Link href="/admin/dashboard" className='block text-white hover:text-blue-600'>
                        Dashboard
                    </Link>
                    <Link href="/admin/add-blog" className='block text-white hover:text-blue-600'>
                        Add Blog
                    </Link>
                    {/* <Link href="/admin/dashboard" className='block text-gray-700 hover:text-blue-600'>
                        Logout
                    </Link> */}
                    <Link href="/admin/view-comments/your-blog-id" className='block text-white hover:text-blue-600'>
                    View Comments
                    </Link>


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
