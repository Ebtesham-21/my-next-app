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
    <div className='h-screen flex items-center justify-center bg-black'>
        <form onSubmit={handleSubmit} className=' p-8 rounded shadow-md space-y-4'>
            <h2 className='text-2xl font-bold'>Admin Login</h2>
            <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
                className='p-2 border rounded w-full'
                required
            />
            <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-2 border rounded w-full'
                required
            />
            <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
                Login
            </button>
        </form>

    </div>
);
};

export default AdminLogin;