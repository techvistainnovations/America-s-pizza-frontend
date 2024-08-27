import * as React from 'react';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Navbar from './Navbar'
import Logo from './Logo'
import { FaInstagram, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { RiFacebookLine } from 'react-icons/ri';
import { CiLinkedin } from 'react-icons/ci';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import SearchBox from '../SearchBox/SearchBox';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='bg-whiteColor'>
        <div className='container mx-auto'>
          <div className='flex py-2 justify-between items-center'>
            <div className='sm:flex hidden'>
              <SocialFeed />
            </div>
            <div className='cursor-pointer sm:flex hidden text-themeColor'>
              <SearchBox />
            </div>
            <ul className='flex sm:justify-end justify-between flex-1 sm:flex-none items-center gap-4'>
              <li>
                <div className='cursor-pointer text-themeColor'>
                  <Link to={'/cart'}>
                    <MdOutlineAddShoppingCart className='text-xl' />
                  </Link>
                </div>
              </li>
              <li className='sm:hidden block'>
                <div className='cursor-pointer text-themeColor'>
                  <SearchBox />
                </div>
              </li>
              <li>
                <div className='cursor-pointer text-xl text-themeColor pl-2'>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <FaUserCircle />
                      {/* <Avatar sx={{ width: 32, height: 32 }}>J</Avatar> */}
                    </IconButton>
                  </Tooltip>
                </div>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  className='!z-[999999]'
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {
                    false ? (
                      <>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                      </>
                    ):(
                      <MenuItem onClick={handleClose}>
                        <Link to={'/login'} className='flex items-center'>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Login
                        </Link>
                      </MenuItem>
                    )
                  }
                </Menu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}



const Header = () => {
 
  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-[9999]'>
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