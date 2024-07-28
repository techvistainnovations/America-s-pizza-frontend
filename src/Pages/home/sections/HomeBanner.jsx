import React from 'react'
import Button from '@mui/material/Button';

const HomeBanner  = () => {
    return (
        <section className='w-full xl:h-[500px] lg:h-[450px] md:h-[400px]  home_banner relative'>
            <div className='container h-full mx-auto'>
                <div className='flex md:flex-row sm:flex-col flex-col flex-1 h-full md:py-0 sm:py-4 py-10'>
                    {/* left */}
                    <div className='md:w-1/2 sm:w-full w-full h-full flex justify-center items-center flex-col md:my-0 sm:my-10 my-4 relative z-20'>
                        <h2 className='md:text-5xl sm:text-4xl text-2xl text-whiteColor text-center md:leading-[55px] sm:leading-[50px] leading-[45px] font-bold'>Farm. Fresh. Delicious</h2>
                        <img src="/images/ui/waves-image.png" alt="Waves Image" className="md:max-w-[280px] sm:max-w-[180px] max-w-[150px] mx-auto md:mt-3 sm:mt-2 mt-2" />
                        <div className='mt-6'>
                            <Button variant="contained" className='!bg-whiteColor !text-themeColor !capitalize !font-extrabold !text-lg'>Order Now</Button>
                        </div>
                    </div>
                    {/* right part */}
                    <div className='d:w-1/2 sm:w-full w-full flex flex-1 h-full md:mt-0 sm:mt-0 mt-4'>
                        <img className='w-full object-contain' src="/src/assets/images/ui/burger-burger-farm.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner