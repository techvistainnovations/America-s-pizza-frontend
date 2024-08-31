import React from 'react';
import { Button } from '@mui/material';

const ProductCard = ({ props }) => {
    const product = props?.products

    console.log("product", props);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <img src={product?.image} alt={product?.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{product?.title}</h3>
            <p className="text-gray-700">Price: ₹{product?.price}</p>
            <div className="flex items-center mt-2">
                <span className={`text-sm ${product?.isVeg ? 'text-green-600' : 'text-red-600'}`}>
                    {product?.isVeg ? 'Veg' : 'Non-Veg'}
                </span>
            </div>
            <p className="text-gray-500 mt-1">Category: {product?.category}</p>
            <Button variant="contained" color="secondary" className="mt-4 w-full">Add to Cart</Button>
        </div>
    );
}

export default ProductCard;