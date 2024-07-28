import React from 'react'
import { MdDirectionsBike } from "react-icons/md";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const LetsGetOrdering = () => {
    return (
        <div className='mt-2 mb-12 LetsGetOrdering container mx-auto'>
            <div className='bg-whiteColor p-4 rounded shadow-get-ordering'>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <button className='active flex items-center justify-center gap-2 px-4 py-2 text-blackLabel text-base font-semibold border-b-[3px] border-[#e9ecef]'>
                            <MdDirectionsBike />
                            Delivery
                        </button>
                        <button className='flex items-center justify-center gap-2 px-4 py-2 text-blackLabel text-base font-semibold border-b-[3px] border-[#e9ecef]'>
                            <LiaPeopleCarrySolid />
                            Pickup
                        </button>
                    </div>
                    <div className='lg:mt-6 md:mt-4 mt-4 mb-2'>
                        <h5 className='lg:text-[22px] md:text-[20px] lg:leading-[40px] md:leading-[35px] font-semibold text-themeColor'>Lets Get Ordering</h5>
                        <h6 className='lg:text-2xl md:text-[22px] lg:leading-[40px] md:leading-[35px] font-semibold text-blackLabel'>Set Your Delivery Location To Get Started</h6>
                        <div className='orderAction lg:mt-5 md:mt-3 mt-3 flex md:flex-row sm:flex-col flex-col md:items-center sm:items-center items-center lg:gap-6 gap-3 md:gap-3'>
                            <button className='bg-themeColor md:w-auto sm:w-full w-full text-[15px] flex items-center justify-center gap-1 px-6 py-4 text-whiteColor rounded-md font-semibold'>
                                <MdOutlineLocationOn />
                                Use my current location
                            </button>
                            <div>OR</div>
                            <div className='flex md:w-auto sm:w-full w-full'>
                                <Box className='lg:w-[200px] md:w-[150px] sm:w-1/2 w-1/2'>
                                    <FormControl className='w-full'>
                                        <InputLabel id="demo-simple-select-label" className='bg-whiteColor !block !pr-1'>Select City</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                        >
                                            <MenuItem value={10}>Jodhpur</MenuItem>
                                            <MenuItem value={20}>Pali</MenuItem>
                                            <MenuItem value={30}>Jaipur</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box className='lg:w-[200px] md:w-[150px] sm:w-1/2 w-1/2'>
                                <FormControl className='w-full'>
                                    <InputLabel id="demo-simple-select-label" className='bg-whiteColor !block !pr-1'>Select Outlet</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                    >
                                        <MenuItem value={10}>1</MenuItem>
                                        <MenuItem value={20}>2</MenuItem>
                                        <MenuItem value={30}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsGetOrdering