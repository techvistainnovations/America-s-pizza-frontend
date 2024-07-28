import React from 'react'
import PopularCities from './PopularCities'

const StoreLocator = () => {
  return (
    <section className='container mx-auto mt-[87px]'>
        <h2 className='text-4xl text-darkbg font-semibold leading-[65px]'>Burger Farm Outlets Near You</h2>
        <div className='flex gap-5'>
            {/* Popular Cities */}
            <div className='w-1/3'>
                <PopularCities></PopularCities>
            </div>
            <div className='flex-1'>
                sdfsdfsdfsdfsdf
            </div>
        </div>
    </section>
  )
}

export default StoreLocator