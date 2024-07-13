import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Logo = () => {
    return (
        <div className='flex gap-2 items-center'>
            <Link to={'/'}><h1><img className='w-[55px] h-[55px]' src="src/assets/images/logo/logo.png" alt="logo-image" title="logog" /></h1></Link>
            <div>
                <span className='font-poppins text-whiteColor font-extralight text-[11px]'>Change Out</span>
                <Link to={'/'}>
                    <div className='flex items-center border-b border-dashed border-whiteColor'>
                        <span className='text-whiteColor font-normal text-sm'>Raja Park, Jaipur</span>
                        <KeyboardArrowDownIcon className='text-whiteColor'></KeyboardArrowDownIcon>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Logo