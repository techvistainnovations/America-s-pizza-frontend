import React from 'react'

const GetAppSection = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex relative into-saving justify-center items-center md:flex-col-reverse flex-col-reverse lg:flex-row lg:gap-[20px] md:gap-[40px] gap-[30px] lg:py-[30px] md:py-0 py-0'>
            <div className='xl:max-w-[45%] lg:max-w-[40%] xl:px-12 lg:px-0 md:px-12 px-4'>
                <img src='/images/ui/image-789629-1711106747.jpeg' alt="img" className='w-full'/>
            </div>
            <div>
                <h4 className='lg:text-[62px] md:text-[52px] sm:text-[42px] text-[32px] lg:pb-4 pb-4 text-themeColor mb-[3px] font-[700] relative text-center'>Bite into savings</h4>
                <p className='lg:text-[22px] md:text-[20px] text-[20px] text-themeColor mb-[25px] font-[700] text-center'>with the "Americans Pizza" app</p>
                <div className='flex justify-center sm:gap-4 gap-2'>
                    <img src="/images/logo/play-store.png" className='sm:w-auto w-1/2' alt="playstoreLogo" />
                    <img src="/images/logo/ios-app.png" className='sm:w-auto w-1/2' alt="appstoreLogo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetAppSection