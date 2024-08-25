import { Input } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();
    const [snackbarSeverity, setSnackbarSeverity] = useState('error'); // Add severity state

    const handleLogin = (e) => { 
        e.preventDefault(); // Prevents the default form submission

        console.log("submit click", e);

        if(email === 'jagdish@gmail.com' && password === '123456'){
            localStorage.setItem('token', 'sdskfdbsjfdbsjfsdfsdf');
            setError('login successful');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            setTimeout(() => {
                navigate('/')
            }, 2000);
        } else {
            setError('Invalid email or password');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }

        // Uncomment and implement the actual login logic when ready
        /*
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
        */
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className='mt-[148px] container mx-auto md:py-12 py-0'>
            <div className="relative mx-auto w-full max-w-md bg-white py-6 md:shadow-xl shadow-none md:ring-1 ring-0 ring-themeColor sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl mb-2 font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={handleLogin}> {/* Attach handler to onSubmit */}
                            <div className="relative mt-6">
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email Address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none"
                                />
                                <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Email Address
                                </label>
                            </div>
                            <div className="relative mt-6">
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                                />
                                <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Password
                                </label>
                            </div>
                            
                            <div className="my-6">
                                <button type="submit" className="w-full text-whiteColor rounded-md bg-themeColor px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">
                                    Sign in
                                </button>
                            </div>
                            <p className="text-center text-sm text-gray-500">
                                Don't have an account yet?
                                <Link 
                                    to={'/register'}
                                    className="font-semibold pl-1 text-themeColor focus:text-themeColor">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <CustomSnackbar 
                open={openSnackbar} 
                handleClose={handleCloseSnackbar} 
                message={error} 
                severity={snackbarSeverity} 
            />
        </div>
    );
};

export default Login;
