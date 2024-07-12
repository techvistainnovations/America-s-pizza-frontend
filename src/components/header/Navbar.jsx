import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='flex gap-[20px]'>
     <Link to={'/Menu'}> <li>Menu</li></Link> 
     <Link to={'/Locations'}> <li>Locations</li></Link>
      <Link to={'/About'}> <li>About</li></Link> 
        <Link to={'/Blog'}><li>blog</li></Link>
        
      </ul>
    </div>
  )
}

export default Navbar