import { Input } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://yourapi.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);

            // Redirect to home or dashboard
            window.location.href = '/dashboard';
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='mt-[148px] py-12'>
            <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-themeColor sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl mb-2 font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-12">
                        <form action="">
                            <div className="relative mt-6">
                                <Input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none" autocomplete="NA" />
                                <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                            </div>
                            <div className="relative mt-6">
                                <Input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            </div>
                            <div className="my-6">
                                <button type="submit" className="w-full text-whiteColor rounded-md bg-themeColor px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                <Link to={'/register'}
                                    className="font-semibold pl-1 text-themeColor focus:text-themeColor">Sign
                                    up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;