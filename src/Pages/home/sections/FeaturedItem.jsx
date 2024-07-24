import React from 'react'
import { Link } from 'react-router-dom'
import { LuVegan } from "react-icons/lu";
import { BiUpArrow } from "react-icons/bi";
// import Button from '@mui/material/Button';
import { FaPlus } from "react-icons/fa6";

import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
const FeaturedItem = (props) => {
  return ( 
    <div className='flex md:max-h-auto sm:max-h-[150px] max-h-[150px] hover:drop-shadow-md transition-all w-full drop-shadow bg-whiteColor rounded-lg overflow-hidden'>
        <Link to={'/'} className='w-[40%]'>
            <img src={props.itemData.image} alt={props.itemData.title} loading="lazy" className='w-full h-full object-cover'/>
        </Link>
        <div className='flex-1 relative p-3 pb-14'>
             <Tooltip TransitionComponent={Zoom} title={props.itemData.title}>
                    <h4 className='pr-8 allow2Line cursor-pointer text-sm text-black font-semibold mb-2 uppercase'>{props.itemData.title}</h4>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title={props.itemData.desc}>
                <p className='text-xs allow2Line text-descColor font-medium leading-5'>{props.itemData.desc}</p>
            </Tooltip>
            {
                props.itemData.isVegFlag === 1 ?
                <LuVegan className='absolute text-vegColor top-2 right-2'></LuVegan>
                : 
                props.itemData.isVegFlag === 2 ?
                <BiUpArrow className='absolute text-nonVegColor top-2 right-2'></BiUpArrow>
                : ''
            }
            <div className='absolute w-full bottom-0 left-0 right-0 p-3 flex justify-between items-center'>
                <div className='flex gap-[2px] items-center'>
                    <span className='text-black text-sm'>{props.itemData.currency}</span>
                    <span className='text-red text-xs '><s>{props.itemData.fakePrice}</s></span>
                    <span className='text-black text-sm font-semibold'>{props.itemData.price}</span>
                </div>
                <div className='cursor-pointer flex items-center border px-3 gap-1 py-[2px] !leading-6 !border-themeColor !text-themeColor !rounded-[36px]'>
                    <span>Add</span>
                    <FaPlus />
                </div>
            </div>
        </div>
    </div>
  )
}
export default FeaturedItem