import { InputAdornment, IconButton, Input, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar';

const Register = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('error'); // Add severity state
    
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !lastname || !email || !password || !confirmPassword) {
            setError('All fields are required');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        try {
            const response = await fetch('https://yourapi.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, lastname, email, password }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);

            // Redirect to home or dashboard
            window.location.href = '/dashboard';
        } catch (error) {
            setError('Failed to register');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className='mt-[148px] container mx-auto md:py-12 py-0'>
            <div className="relative mx-auto w-full max-w-md bg-white py-6 md:shadow-xl shadow-none md:ring-1 ring-0 ring-themeColor sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl mb-2 font-semibold text-gray-900">Sign up</h1>
                        <p className="mt-2 text-gray-500">Create your account by filling the form below</p>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={handleRegister}>
                            <div className="relative mt-6">
                                <Input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="First Name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none" 
                                    autoComplete="off" 
                                />
                                <label htmlFor="name" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">First Name</label>
                            </div>
                            <div className="relative mt-6">
                                <Input 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname" 
                                    placeholder="Last Name" 
                                    value={lastname} 
                                    onChange={(e) => setLastname(e.target.value)} 
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none" 
                                    autoComplete="off" 
                                />
                                <label htmlFor="lastname" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Last Name</label>
                            </div>
                            <div className="relative mt-6">
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email Address" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none" 
                                    autoComplete="off" 
                                />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                            </div>
                            <div className="relative mt-6">
                                <Input 
                                    type={showPassword ? 'text' : 'password'} 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none" 
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            </div>
                            <div className="relative mt-6">
                                <Input 
                                    type={showConfirmPassword ? 'text' : 'password'} 
                                    name="confirmPassword" 
                                    id="confirmPassword" 
                                    placeholder="Confirm Password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    className="peer mt-1 w-full border-b-1 border-themeColor px-0 py-1 placeholder:text-transparent focus:border-themeColor focus:outline-none" 
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <label htmlFor="confirmPassword" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Confirm Password</label>
                            </div>
                            <div className="my-6">
                                <button type="submit" className="w-full text-whiteColor rounded-md bg-themeColor px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign up</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">Already have an account?
                            <Link to={'/login'}
                                    className="font-semibold pl-1 text-themeColor focus:text-themeColor">Sign
                                    in
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

export default Register;
