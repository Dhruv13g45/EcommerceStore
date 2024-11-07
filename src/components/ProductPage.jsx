import React from 'react'
import { useEffect, useState } from 'react'
import ReviewComponent from "./ReviewComponent"
import WishListButton from './WishListButton'
import AddToCartButton from './AddToCartButton'

const ProductPage = ({ productInfo }) => {
    const [singleProductData, setSingleProductData] = useState({})

    const singleProductApi = `https://fakestoreapi.com/products/${productInfo.productId}`


    const fetchSpecificProduct = async () => {
        const response = await fetch(singleProductApi);
        if (response) {
            try {

                const data = await response.json();
                console.log(data)
                setSingleProductData(data);
                console.log(singleProductData)
            }
            catch (error) {
                console.log("data fetching error", error.status)
            }
        }
    }

    useEffect(() => {
        fetchSpecificProduct();
    }, [])








    return (
        <div className='w-full p-3 mt-5'>

            <div className='w-full flex md:flex-row flex-col justify-evenly items-center gap-5'>
                <div className='w-[60%] md:w-[30%] overflow-hidden flex justify-center items-center'>
                    <img src={singleProductData.image} alt={singleProductData.title} className='w-full' />
                </div>
                <div className='w-[100%] md:w-[60%] flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold'>{singleProductData.title}</h1>
                    <h2 className='text-xl '>{singleProductData.description}</h2>
                    <h1 className='text-2xl font-bold'>Price : $ {singleProductData.price}</h1>
                    <h3 className='text-lg font-bold'>Category : {singleProductData.category}</h3>

                    <AddToCartButton product={singleProductData} quantity={1} />
                    <WishListButton product={singleProductData} />

                </div>
            </div>
            <ReviewComponent singleProductId={singleProductData.id} />
        </div>
    )
}

export default ProductPage
