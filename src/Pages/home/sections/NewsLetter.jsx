import React from 'react'
import { MdEmail, MdOutlineMail } from 'react-icons/md'

const NewsLetter = () => {
    return (
       <div className='bg-[#F8C43A] mb-6 mt-6'>
            <div className='container mx-auto'>
                <div className='flex justify-center md:py-12 sm:py-8 py-6'>
                    <div className='max-w-[600px] text-center'>
                        <h5 className='text-darkbg sm:mb-4 mb-2 font-semibold md:text-4xl sm:text-3xl text-2xl'>Sign up for our newsletter</h5>
                        <p className='text-base font-light'>Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <div className='h-10 relative sm:mt-6 mt-2 w-full flex'>
                            <div className='relative w-full'>
                            <MdEmail className='text-themeColor absolute top-1/2 left-3 text-3xl -translate-y-1/2' />
                                <input type="email" className='w-full pl-14 rounded-md h-full'/>
                            </div>
                            <button className='absolute right-0 h-full rounded-e-md px-3 bg-themeColor text-whiteColor'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default NewsLetter