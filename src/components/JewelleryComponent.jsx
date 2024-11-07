import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const JewelleryComponent = () => {


    const [jewellery, setJewellery] = useState([]);
    const fetchProducts = async () => {
        try {
            const jewelleryProductApi = `https://fakestoreapi.com/products/category/jewelery`;
            const response = await fetch(jewelleryProductApi);
            const data = await response.json();
            setJewellery(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])



    return (
        <div className='w-full'>
            <ProductCard products={jewellery} />
        </div>
    )
}

export default JewelleryComponent
