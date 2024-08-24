import React from 'react';
import { Box, Button, Typography, IconButton, Select, MenuItem, Paper, Divider, Fade, Tooltip } from '@mui/material';
import { Delete as DeleteIcon, InfoOutlined as InfoIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const CartPage = () => {
    const items = [
        // {
        //     id: 1,
        //     name: 'Basic Tee',
        //     color: 'Sienna',
        //     size: 'Large',
        //     price: 32.00,
        //     image: '/path-to-image/sienna-shirt.png',
        //     availability: 'In stock'
        // },
        // {
        //     id: 2,
        //     name: 'Basic Tee',
        //     color: 'Black',
        //     size: 'Large',
        //     price: 32.00,
        //     image: '/path-to-image/black-shirt.png',
        //     availability: 'Ships in 3-4 weeks'
        // }
        {
            id : 7,
            name : 'Farm Aloo Tikki Meal',
            desc : 'Elevate your Farm Aloo Tikki burger to a meal',
            image : '/images/ui/image-914849-1644511269.jpeg',
            currency : '₹',
            price : 115,
            fakePrice : '',
            isVegFlag : 0,
            availability: 'Ships in 3-4 weeks',
            isAddedToCart : false,
        },
        {
            id : 8,
            name : 'Farm Spicy Chicken Wrap',
            desc : 'Spicy chicken patty served whole in this wrap',
            image : '/images/ui/image-833968-1644510327.jpeg',
            currency : '₹',
            price : 172,
            fakePrice : '299',
            isVegFlag : 2,
            availability: 'Ships in 3-4 weeks',
            isAddedToCart : false,
        },
    ];

    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className='mt-[148px] py-12'>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Shopping Cart
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
                    <Box flex={1}>
                        {items.map((item) => (
                            <Fade in={true} timeout={500} key={item.id}>
                                <Paper
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    elevation={3}
                                    sx={{ display: 'flex', alignItems: 'start', p: 2, mb: 2 }}
                                >
                                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', aspectRatio : '1/1', borderRadius: '8px' }} />
                                    <Box sx={{ flexGrow: 1, ml: 2 }}>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {item.desc}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mt: 1 }}>${item.price.toFixed(2)}</Typography>
                                        <Typography variant="body2" color={item.availability === 'In stock' ? 'green' : 'gray'}>
                                            {item.availability}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Select defaultValue={1} sx={{ mr: 2 }}>
                                            {[1, 2, 3].map((value) => (
                                                <MenuItem key={value} value={value}>{value}</MenuItem>
                                            ))}
                                        </Select>
                                        <IconButton color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Paper>
                            </Fade>
                        ))}
                    </Box>

                    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ minWidth: '300px' }}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                Order summary
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" color="textSecondary">Subtotal</Typography>
                                    <Typography variant="body2">${totalPrice.toFixed(2)}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" color="textSecondary">
                                        Shipping estimate
                                        <Tooltip title="Estimated cost of shipping based on your location." placement="top">
                                            <IconButton size="small" sx={{ ml: 1 }}>
                                                <InfoIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Typography>
                                    <Typography variant="body2">$5.00</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" color="textSecondary">
                                        Tax estimate
                                        <Tooltip title="Estimated taxes based on your location." placement="top">
                                            <IconButton size="small" sx={{ ml: 1 }}>
                                                <InfoIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Typography>
                                    <Typography variant="body2">$8.32</Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.25rem', mt: 2 }}>
                                <Typography>Order total</Typography>
                                <Typography>${(totalPrice + 5 + 8.32).toFixed(2)}</Typography>
                            </Box>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} component={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Checkout
                            </Button>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default CartPage;
