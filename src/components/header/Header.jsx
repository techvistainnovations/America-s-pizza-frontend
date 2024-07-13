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
const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
    <header className='bg-themeColor fixed top-0 left-0 right-0 w-full z-[99999999] py-4 drop-shadow-md'>
      <div className='container mx-auto'>
        <div className="flex justify-between items-center">
          <Logo/>
          <Navbar/>
        </div>
      </div>
    </header>
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