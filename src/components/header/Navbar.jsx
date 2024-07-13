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

const menuItems = [
  {name: 'Store Locator', to : '/'},
  {name: 'Order Now', to : '/'},
  {name: 'Franchise Enquiry', to : '/'},
  {name: 'Bulk Orders', to : '/'},
  {name: 'Promo Codes', to : '/'},
]


const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className='mt-[87px]' sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> 
    </Box>
  );

  return (
    
    <div>
      <ul className='lg:flex md:hidden hidden gap-6 main-menu'>
        { 
          menuItems.map(item=>{
            return (
            <li key={item.name}>
              <Link  to={item.to}>{item.name}</Link> 
            </li> 
            )
          })
        }
        <li>
          <div className='cursor-pointer'>
          <IoMdLogIn className='text-xl'></IoMdLogIn>
          </div>
        </li>
      </ul>
      <div className='lg:hidden gap-4 md:flex items-center flex'>
          <IoMdLogIn className='text-3xl text-whiteColor cursor-pointer'></IoMdLogIn>
          <CgMenuRight onClick={toggleDrawer(true)} className='text-3xl text-whiteColor cursor-pointer'></CgMenuRight> 
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
      </div>
    </div>
  )
  
}

export default Navbar