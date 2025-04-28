'use client';

import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';

const AdminLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
            if(isLoggedIn) {
                router.push('/admin/dashboard');
            }
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
            password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
                localStorage.setItem('isAdminLoggedIn', true);
                router.push('/admin/dashboard');

    } else {
        alert('Invalid credentials');
    }
};

return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
        <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md space-y-4'>
            

        </form>

    </div>
)