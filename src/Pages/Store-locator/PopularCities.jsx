import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const popularCitiesData = [
  {id : 1, title : 'Agra'},
  {id : 2, title : 'Ahmedabad'},
  {id : 3, title : 'Ajmer'},
  {id : 4, title : 'Alwar'},
  {id : 5, title : 'Bhilwara'},
  {id : 6, title : 'Bikaner'},
  {id : 7, title : 'Choru'},
  {id : 8, title : 'Gandhinagar'},
  {id : 9, title : 'Indore'},
  {id : 10, title : 'Jaipur'},
  {id : 11, title : 'Jodhpur'},
  {id : 12, title : 'Kota'},
  {id : 13, title : 'Sikar'},
  {id : 14, title : 'Sri Ganga Nagar'},
  {id : 15, title : 'Udaipur'},
]

function PopularCities() {
  return (
    <div className='w-full card'>
        <h5 className='py-3 border-b border-lightBorder lg:px-6 md:px-4 text-lg text-themeColor font-semibold'>Popular Cities</h5>
        <div className='flex py-3 lg:px-6 md:px-4 gap-3 flex-col'>
        {
          popularCitiesData.map(city => {
            return (
              <div className='flex items-start gap-2 text-blackLabel' key={city.id}>
                <IoLocationOutline className='mt-1'></IoLocationOutline>
                <span className='leading-6'>{city.title}</span>
              </div>
            )
          })
        }

        </div>
    </div>
  )
}

export default PopularCities