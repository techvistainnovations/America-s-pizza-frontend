import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from './Navbar'
import Logo from './Logo'
import { FaInstagram, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { RiFacebookLine } from 'react-icons/ri';
import { CiLinkedin } from 'react-icons/ci';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import SearchBox from '../SearchBox/SearchBox';

export const SocialFeed = () => {
  return (
    <>
          <ul className='flex gap-4 text-xl'>
              <li>
                <div className='cursor-pointer text-[#010A43] duration-300 transition-all hover:text-[#FF2E63]'>
                  <RiFacebookLine />
                </div>
              </li>
              <li>
                <div className='cursor-pointer text-[#010A43] duration-300 transition-all hover:text-[#FF2E63] pr-1'>
                  <CiLinkedin />
                </div>
              </li>
              <li>
                <div className='cursor-pointer text-[#010A43] duration-300 transition-all hover:text-[#FF2E63] pr-1'>
                  <FaInstagram />
                </div>
              </li>
              <li>
                <div className='cursor-pointer text-[#010A43] duration-300 transition-all hover:text-[#FF2E63] pr-1'>
                  <FaWhatsapp />
                </div>
              </li>
            </ul>
    </>
  )
}

const TopBar = () => {
  return (
    <>
      <div className='bg-whiteColor'>
        <div className='container mx-auto'>
          <div className='flex py-2 justify-between items-center'>
            <div className='sm:flex hidden'>
              <SocialFeed></SocialFeed>
            </div>
            <div className='cursor-pointer sm:flex hidden text-themeColor'>
              <SearchBox></SearchBox>
            </div>
            <ul className='flex sm:justify-end justify-between flex-1 sm:flex-none items-center gap-4'>
              <li>
                <div className='cursor-pointer text-themeColor'>
                  <MdOutlineAddShoppingCart className='text-xl' />
                </div>
              </li>
              <li className='sm:hidden block'>
                <div className='cursor-pointer text-themeColor'>
                  <SearchBox></SearchBox>
                </div>
              </li>
              <li>
                <div className='cursor-pointer text-xl text-themeColor pl-2'>
                  <FaUserCircle></FaUserCircle>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-[99999999] '>
        <TopBar></TopBar>
        <header className='bg-themeColor  w-full py-4 drop-shadow-md'>
          <div className='container mx-auto'>
            <div className="flex justify-between items-center">
              <Logo />
              <Navbar />
            </div>
          </div>
        </header>
      </div>
    </>

    // <div>
    //   <Button onClick={toggleDrawer(true)}>Open drawer</Button>
    //   <Drawer open={open} onClose={toggleDrawer(false)}>
    //     {DrawerList}
    //   </Drawer>
    // </div>
  );
}

export default Header