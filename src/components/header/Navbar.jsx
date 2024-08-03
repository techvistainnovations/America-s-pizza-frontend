import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import Drawer from '@mui/material/Drawer';
import { Fade as Hamburger } from 'hamburger-react'
import SearchBox from '../SearchBox/SearchBox';

import { MdOutlineAddShoppingCart } from "react-icons/md";

import { FaUserCircle } from "react-icons/fa";
import { SocialFeed } from './Header';


const menuItems = [
  {id: 1,name: 'Our Menu', to : 'our-menu'},
  {id: 2, name: 'Store Locator', to : 'store-locator'},
  {id: 3,name: 'Celebration Order', to : 'celebration-order'},
  {id: 4,name: 'Order Now', to : 'order-now'},
  // {id: 5,name: 'Franchise Enquiry', to : '/'},
  // {id: 6,name: 'Promo Codes', to : '/'},
]


const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className='mt-[142px]' sx={{ width: 250 }} a role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} d isablePadding>
            <Link className='pl-3 border-b w-full border-[#f7f7f7] m-0 pb-2 pt-0' to={item.to}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
            <div className='w-full flex pl-6 mt-4 sm:hidden h-[55px]'>
              <SocialFeed></SocialFeed>
            </div>
      </List> 
    </Box>
  );

  return (
    
    <div>
      <ul className='lg:flex items-center md:hidden hidden gap-6 main-menu'>
        { 
          menuItems.map(item=>{
            return (
            <li key={item.id}>
              <Link to={item.to}>{item.name}</Link> 
            </li> 
            )
          })
        }
        {/* <li>
          <div className='cursor-pointer pl-6'>
            <MdOutlineAddShoppingCart className='text-xl'/>
          </div>
        </li>
        <li>
        <div className='cursor-pointer'>
            <SearchBox></SearchBox>
          </div>
        </li>
        <li>
          <div className='cursor-pointer'>
              <FaUserCircle></FaUserCircle>
          </div>
        </li> */}
      </ul>
      <div className='lg:hidden gap-4 md:flex items-center flex'>
          {/* <IoMdLogIn className='text-3xl text-whiteColor cursor-pointer'></IoMdLogIn> */}
          {/* <CgMenuRight onClick={toggleDrawer(true)} className='text-3xl text-whiteColor cursor-pointer'></CgMenuRight>  */}
          <Hamburger size={25} color="#fff" toggled={open} toggle={setOpen} />
          <Drawer open={open} anchor={'right'} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
      </div>
    </div>
  )
  
}

export default Navbar