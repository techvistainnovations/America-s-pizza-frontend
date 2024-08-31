import React from 'react';
import { Checkbox, TextField, FormControlLabel, Button, InputLabel, MenuItem, Select } from '@mui/material';

const FilterBar = ({ filters, setFilters }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-200">
            <TextField 
                label="Search" 
                variant="outlined" 
                size="small" 
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <FormControlLabel
                control={
                    <Checkbox 
                        checked={filters.isVeg} 
                        onChange={(e) => setFilters({ ...filters, isVeg: e.target.checked })}
                    />
                }
                label="Veg"
            />
            <FormControlLabel
                control={
                    <Checkbox 
                        checked={filters.isNonVeg} 
                        onChange={(e) => setFilters({ ...filters, isNonVeg: e.target.checked })}
                    />
                }
                label="Non-Veg"
            />
            <div className="flex items-center">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                    labelId="category-label"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    size="small"
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Pizza">Pizza</MenuItem>
                    <MenuItem value="Beverages">Beverages</MenuItem>
                    {/* Add other categories as needed */}
                </Select>
            </div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => setFilters({ ...filters, sortBy: 'price' })}
            >
                Sort by Price
            </Button>
        </div>
    );
}

export default FilterBar;
