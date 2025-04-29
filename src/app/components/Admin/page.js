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
        <div className='min-h-screen flex bg-gray-100'>
            {/* sidebar */}
            <div className='w-64 bg-white shadow-md p-6 space-y-6'>
                <h2 className='text-2xl font-bold'>Admin Panel</h2>
                <nav className='space-y-4'>
                    <Link href="/admin/dashboard" className='block text-gray-700 hover:text-blue-600'>
                        Dashboard
                    </Link>
                    <Link href="/admin/add-blog" className='block text-gray-700 hover:text-blue-600'>
                        Add Blog
                    </Link>
                    {/* <Link href="/admin/dashboard" className='block text-gray-700 hover:text-blue-600'>
                        Logout
                    </Link> */}

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
