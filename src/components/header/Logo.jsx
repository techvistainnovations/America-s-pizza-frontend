import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='flex'>
            <Link to={'/'}><h1><img className='w-[55px] h-[55px]' src="src/assets/images/logo/logo.png" alt="logo-image" title="logog" />Logo</h1></Link>
            <div>
                <span className='font-poppins text-whiteColor font-extralight text-[11px]'>Change Out</span>
                <Link to={'/'}>
                <div className='flex gap-2'>
                    <span>Raja Park, Jaipur</span>
                     
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Logo