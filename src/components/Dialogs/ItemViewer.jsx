// MenuItemDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { IoClose } from 'react-icons/io5';
import { Slide } from '@mui/material';


const Transition = React.forwardRef(function Transition(
    props = {
      children
    },
    ref,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});   

const MenuItemDialog = ({ isOpen, data, onClose }) => {
  return (
    <React.Fragment>
    <Dialog open={isOpen}  TransitionComponent={Transition} className='!z-[999999999] dialog-wrapper' onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {data.title}
        <div onClick={onClose} style={{ float: 'right', cursor : 'pointer', verticalAlign : 'middle', position : 'relative', top : '5px' }}>
            <IoClose />
        </div>
      </DialogTitle>
      <DialogContent className='!px-0'>
        <img className='md:max-h-72 max-h-56 object-cover' src={data.coverImage} alt={data.title} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
        <div className='px-4'>
            {/* <p className='text-black text-base'>{data.desc}</p> */}
            <ul className='border rounded-md bg-[#f7f7f7] mt-4 py-2 px-4 border-[#ccc]'>
            {data.items?.map(item => (
                <li key={item.id} className='flex justify-between md:text-base text-sm md:my-3 my-2'>
                <span>{item.title}</span>  <span>₹{item.price}</span>
                </li>
            ))}
            </ul>
        </div>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions> */}
    </Dialog>
    </React.Fragment>
  );
};

export default MenuItemDialog;