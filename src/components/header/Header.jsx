import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='bg-themeColor'>
      <div className='container mx-auto'>
        <Logo/>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header