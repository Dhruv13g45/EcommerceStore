import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const WomenComponent = () => {


    const [womenProducts, setWomenProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const womenProductApi = `https://fakestoreapi.com/products/category/women's clothing`;
            const response = await fetch(womenProductApi);
            const data = await response.json();
            setWomenProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])




    return (
        <div className='w-full'>
            <ProductCard products={womenProducts} />
        </div>
    )
}

export default WomenComponent
