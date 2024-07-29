import React from 'react'
import PopularCities from './PopularCities'
import { MdOutlineLocationOn } from "react-icons/md";

const locationsData = [
  {
    id : 1,
    title : 'American pizza',
    location : 'Fatima Route',
    address : '8303 Fatima Route, Davenport, Pennsylvania - 67230, Burkina Faso',
  },
  {
    id : 2,
    title : 'American pizza',
    location : 'Ansel Fall',
    address : '42264 Ansel Fall, Milanberg, Florida - 81796, Greece',
  },
  {
    id : 3,
    title : 'American pizza',
    location : 'Ansel Fall',
    address : '42264 Ansel Fall, Milanberg, Florida - 81796, Greece',
  },
];


const LocationsItem = (props) => {
  console.log("props", props);
  return (
    <>
      {/* <div className={props.index != locationsData.length - 1 ? 'border-b border-lightBorder flex items-start gap-3 xl:px-6 xl:pb-6 xl:pt-6 xl:mb-2 ' : 'flex items-start gap-3 xl:px-6 xl:pb-6 xl:pt-6 xl:mb-2 '}> */}
      <div className={'border-b border-lightBorder flex items-start gap-3 xl:px-6 xl:pb-5 xl:pt-4 md:pt-3 pt-3 md:pb-3 pb-3 xl:mb-2 lg:pb-4 lg:pt-4'}>
          <div className='w-1/6'>
            <img src="/images/logo/logo.png" className='w-28' alt="" />
          </div>
          <div className='flex-1 gap-1 flex flex-col'>
            <h3 className='md:text-2xl text-1xl text-black font-medium'>{props.itemData.title}</h3>
            <div className='flex items-center gap-1'>
              <MdOutlineLocationOn  className='text-sm text-darkbg'></MdOutlineLocationOn>
              <span className='text-sm text-darkbg'>{props.itemData.location}</span>
            </div>
            <p className='text-base text-darkbg leading-5 font-light'>{props.itemData.address}</p>
            <div className='flex md:mt-2 mt-1 gap-3'>
              <button className='primary_btn rounded'>View Store</button>
              <button className='secondary_btn rounded'>Online Order</button>
            </div>
          </div>
      </div>
    </>
  )
};

const LocationCom = () => {
  return (
    <>
      <div className='w-full card lg:px-6 md:px-4 px-4 flex flex-col'>
        {locationsData.map((item, i) => {
          return (
            <LocationsItem key={item.id} itemData={item} index={i}></LocationsItem>
          )
        })}
      </div>
    </>
  )
};

const StoreLocator = () => {
  return (
    <section className='container pt-3 mx-auto mt-[87px]  lg:mb-12 md:mb-6 sm:mb-4 mb-4'>
        <h2 className='lg:text-4xl md:text-3xl text-2xl text-darkbg font-semibold md:leading-[65px] sm:leading-10'>Burger Farm Outlets Near You</h2>
        <div className='flex lg:gap-8 md:gap-4 mt-4'>
            {/* Popular Cities */}
            <div className='w-1/4 md:block sm:hidden hidden'>
                <PopularCities></PopularCities>
            </div>
            <div className='flex-1'>
              <LocationCom></LocationCom>
            </div>
        </div>
    </section>
  )
}

export default StoreLocator