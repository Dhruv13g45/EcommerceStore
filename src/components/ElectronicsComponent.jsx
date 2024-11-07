import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ElectronicsComponent = () => {


    const [electronics, setElectronics] = useState([]);
    const fetchProducts = async () => {
        try {
            const electronicsProductApi = `https://fakestoreapi.com/products/category/electronics`;
            const response = await fetch(electronicsProductApi);
            const data = await response.json();
            setElectronics(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])



    return (
        <div className='w-full'>
            <ProductCard products={electronics} />
        </div>
    )
}

export default ElectronicsComponent
