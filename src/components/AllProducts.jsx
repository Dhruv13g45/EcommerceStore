import React from 'react'
import ProductCard from "./ProductCard"
import { useState, useEffect } from 'react';

const AllProducts = () => {


    const [products, setProducts] = useState([]);
    const fetchProducts = async (param) => {
        try {
            const productsApi = `https://fakestoreapi.com/products`;
            const response = await fetch(productsApi);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='w-full'>
            <ProductCard products={products} />
        </div>
    )
}

export default AllProducts
