import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const MenComponent = () => {


    const [menProducts, setMenProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const menProductapi = `https://fakestoreapi.com/products/category/men's clothing`;
            const response = await fetch(menProductapi);
            const data = await response.json();
            setMenProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])



    return (
        <div className='w-full'>
            <ProductCard products={menProducts} />
        </div>
    )
}

export default MenComponent
