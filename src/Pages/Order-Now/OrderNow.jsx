import React, { useState } from 'react';
import FilterBar from './FilterBar';
import ProductList from './ProductList';

const productsData = [
    { id: 1, image: 'url1', title: 'Margherita', price: 199, isVeg: true, category: 'Pizza' },
    { id: 2, image: 'url2', title: 'Pepperoni', price: 299, isVeg: false, category: 'Pizza' },
    // Add more products as needed
];

const OrderNow = () => { 
    // const [pizzaData, setPizzaData] = useState([/* Your pizza data */]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isVegOnly, setIsVegOnly] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        isVeg: false,
        isNonVeg: false,
        category: '',
        sortBy:''
    })
    const filteredProducts = productsData.filter(product => 
            (!filters.search || product.title.toLowerCase().includes(filters.search.toLowerCase())) &&
            (!filters.isVeg || product.isVeg) &&
            (!filters.isNonVeg || !product.isVeg) &&
            (!filters.category || product.category === filters.category)
        ).sort((a, b) => filters.sortBy === 'price' ? a.price - b.price : 0);
    console.log("filteredProducts", filteredProducts);
    
   

    return (
        <>
            <div className="container mt-96 mx-auto">
                <FilterBar filters={filters} setFilters={setFilters} />
                <ProductList products={filteredProducts} />
            </div>
        </>
    )
}

export default OrderNow