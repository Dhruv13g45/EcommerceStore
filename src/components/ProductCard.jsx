import React from 'react'
import { useState } from 'react'
import ProductPage from "./ProductPage"
import WishListButton from './WishListButton'
import AddToCartButton from './AddToCartButton'


const ProductCard = ({ products }) => {

    const [clickState, setClickState] = useState(false);
    const [productInfo, setProductInfo] = useState({ productId: "", productCategory: "" });

    const viewProduct = (productIdKey, productCategoryKey, productIdValue, productCategoryValue) => {
        setProductInfo(prev => ({
            ...prev,
            [productIdKey]: productIdValue,
            [productCategoryKey]: productCategoryValue,
        }));
        setClickState(prev => !prev);
    }




    return (
        <>
            <div className='w-full mt-10 p-3'>

                {
                    clickState ? <ProductPage productInfo={productInfo} />
                        :
                        <>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-7 '>
                                {
                                    products.length > 0
                                    &&
                                    products.map((product) => (
                                        <div className='w-full flex flex-col text-center items-center justify-between  rounded-xl shadow-2xl p-3 md:p-5' key={product.id} >
                                            <div className='w-full h-80 flex justify-center items-center hover:scale-110 duration-200 hover:cursor-pointer overflow-y-hidden p-3' onClick={() => (viewProduct("productId", "productCategory", product.id, product.category))}>
                                                <img src={product.image} alt={product.title} className='w-[200px]  ' />
                                            </div>


                                            <div className='w-full mt-3'>
                                                <p className='text-sm md:text-lg lg:text-xl'>{product.title}</p>
                                                <div className='flex w-full flex-col justify-evenly items-center mt-5 gap-3'>
                                                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-5 py-3 gap-5'>$ {product.price}</p>

                                                    <AddToCartButton product={product} quantity={1} />
                                                    <WishListButton product={product} />


                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default ProductCard
