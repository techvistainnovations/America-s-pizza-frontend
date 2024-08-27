import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Paper, Divider, Fade, Tooltip } from '@mui/material';
import { Delete as DeleteIcon, InfoOutlined as InfoIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const CartPage = () => {
    const [quantities, setQuantities] = useState([1, 1]); // Adjust this according to the number of items
    const currency = '₹';
    const handleQuantityChange = (index, change) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = Math.max(1, newQuantities[index] + change); // Prevent quantity from going below 1
            return newQuantities;
        });
    };

    const items = [
        {
            id : 7,
            name : 'pizza Aloo Tikki Meal',
            desc : 'Elevate your pizza Aloo Tikki burger to a meal',
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
            name : 'pizza Spicy Chicken Wrap',
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

    const totalPrice = items.reduce((acc, item, index) => acc + item.price * quantities[index], 0);

    return (
        <div className='mt-[148px] py-6'>
            <Box className="container mx-auto">
                <h2 className='lg:text-4xl mb-6 md:text-3xl text-2xl text-darkbg font-semibold md:leading-[65px] sm:leading-10'>Shopping Cart</h2>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
                    <Box flex={1}>
                        {items.map((item, index) => (
                            <Fade in={true} timeout={500} key={item.id}>
                                <Paper
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    elevation={3}
                                    className='!card !shadow-get-ordering'
                                    sx={{ display: 'flex', flexWrap : 'wrap', alignItems: 'start', p: 2, mb: 2 }}
                                >
                                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', aspectRatio : '1/1', borderRadius: '8px' }} />
                                    <Box className="flex flex-col order-3">
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {item.desc}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mt: 1 }}>{currency}{item.price.toFixed(2)}</Typography>
                                        <Typography variant="body2" color={item.availability === 'In stock' ? 'green' : 'gray'}>
                                            {item.availability}
                                        </Typography>
                                    </Box>
                                    <Box className="order-2 flex items-center" >
                                        <IconButton
                                            onClick={() => handleQuantityChange(index, -1)}
                                            color="primary"
                                            sx={{ borderRadius: '4px', backgroundColor: '#f5f5f5' }}
                                            disabled={quantities[index] <= 1}
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography sx={{ mx: 2 }}>{quantities[index]}</Typography>
                                        <IconButton
                                            onClick={() => handleQuantityChange(index, 1)}
                                            color="primary"
                                            sx={{ borderRadius: '4px', backgroundColor: '#f5f5f5' }}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton color="error" sx={{ ml: 2 }}>
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
                                    <Typography variant="body2">{currency}{totalPrice.toFixed(2)}</Typography>
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
                                    <Typography variant="body2">{currency}5.00</Typography>
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
                                    <Typography variant="body2">{currency}8.32</Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.25rem', mt: 2 }}>
                                <Typography>Order total</Typography>
                                <Typography>{currency}{(totalPrice + 5 + 8.32).toFixed(2)}</Typography>
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