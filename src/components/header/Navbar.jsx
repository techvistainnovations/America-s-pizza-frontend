import React from 'react'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
const Navbar = () => {
  return (
    <div>
      <ul className='lg:flex md:hidden hidden gap-6 main-menu'>
        <li>
           <Link to={'/'}>Store Locator</Link> 
        </li>
        <li>
           <Link to={'/'}>Order Now</Link> 
        </li>
        <li>
          <Link to={'/'}>Franchise Enquiry</Link>
        </li>
        <li>
          <Link to={'/'}>Bulk Orders</Link>
        </li>
        <li>
          <Link to={'/'}>Promo Codes</Link>
        </li>
        <li>
          <div className='cursor-pointer'>
          <LoginIcon></LoginIcon>
          </div>
        </li>
      {/* <Link to={'/Locations'}> <li>Locations</li></Link>
        <Link to={'/About'}> <li>About</li></Link> 
          <Link to={'/Blog'}><li>blog</li></Link> */}
        
      </ul>
      <div className='lg:hidden gap-4 md:flex flex'>
          <div className='text-whiteColor cursor-pointer'>
            <LoginIcon></LoginIcon>
          </div>
        <img className='w-[26px]' src="src/assets/images/icons/menu.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar