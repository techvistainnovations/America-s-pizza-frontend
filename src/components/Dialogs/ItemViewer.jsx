// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
// import { data } from 'autoprefixer';
// import React from 'react'

// const ItemViewer = (props) => {

//     const [open, setOpen] = React.useState(false);
//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <Dialog
//                 className='dialog-wrapper'
//                 open={props.open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">
//                     {props.data.title}
//                 </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description">
//                         Let Google help apps determine location. This means sending anonymous
//                         location data to Google, even when no apps are running.
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Disagree</Button>
//                     <Button onClick={handleClose} autoFocus>
//                         Agree
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>
//     )
// }

// export default ItemViewer