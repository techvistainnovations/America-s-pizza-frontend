import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <>

            <footer className='bg-darkbg py-12'>
                <div className='container mx-auto'>
                    <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-2 xl:gap-8 lg:gap-4 gap-8 md:gap-4'>
                        <div>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><div className='cursor-pointer leading-7 text-xs text-whiteColor font-normal'>Shipping Policy</div></li>
                                <li><div className='cursor-pointer leading-7 text-xs text-whiteColor font-normal'>Privacy Policy</div></li>
                                <li><div className='cursor-pointer leading-7 text-xs text-whiteColor font-normal'>Terms & Conditions</div></li>
                                <li><div className='cursor-pointer leading-7 text-xs text-whiteColor font-normal'>Refund Policy</div></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Payment Methods</h4>
                            <div className='grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-2'>
                                <img src="/images/ui/cash-svg.svg" alt="cash" />
                                <img src="/images/ui/mastercard-svg.svg" alt="mastercard" />
                                <img src="/images/ui/gpay-svg.svg" alt="gpay" />
                                <img src="/images/ui/paytm-svg.svg" alt="paytm" />
                                <img src="/images/ui/visa-svg.svg" alt="visa" />
                                <img src="/images/ui/upi-icon.svg" alt="upi" />
                            </div>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <div>
                                <p className='leading-6 text-sm text-whiteColor font-normal'>branch 102 H Block diggi sgnr </p>
                                <p className='leading-6 text-sm text-whiteColor font-normal'>branch 3rd Floor Ridhi sidhi mall sgnr</p>
                            </div>
                        </div>
                        <div>
                            <h4>Contact Us</h4>
                            <div>
                                <ul>
                                    <li className='flex mb-2 gap-2'>
                                        <MdOutlineMailOutline className='pt-1 min-w-[24px] text-base text-whiteColor' />
                                        <a href="mailto:customercare@burgerfarm.in" className=' break-all flex items-center gap-1 text-xs text-whiteColor font-normal'>
                                            customer@americanspizza.in
                                        </a>
                                    </li>
                                    <li className='flex gap-2'>
                                        <FiPhone className='pt-1 min-w-[24px] text-base text-whiteColor' />
                                        <a href="tel:97838 00025" className='leading-6 flex items-center gap-1 text-xs text-whiteColor font-normal'>+91 97838 00025</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                            <div className='flex gap-2'>
                                <a href="#" className='text-3xl rounded-full text-whiteColor'>
                                    <FaFacebookSquare></FaFacebookSquare>
                                </a>
                                <a href="#" className='text-3xl rounded-full text-whiteColor'>
                                    <FaInstagramSquare></FaInstagramSquare>
                                </a>
                                <a href="#" className='text-3xl rounded-full text-whiteColor'>
                                    <FaTwitterSquare></FaTwitterSquare>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-whiteColor py-3 flex'>
                <div className='mx-auto text-themeColor flex items-center gap-2'> <FaCopyright className='text-darkbg'></FaCopyright> <span> Copyright. All Rights Reserved</span> </div>
            </div>
        </>
    )
}

export default Footer