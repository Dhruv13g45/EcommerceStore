import React from 'react'
import { addItemsToCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

const AddToCartButton = ({ product, quantity }) => {

    const dispatchProductInCart = useDispatch();
    const addedToCartNotification = () => toast('Item Added to your Cart 🎉');


    const addToCart = (productId, productTitle, productImage, productPrice, productCount) => {
        dispatchProductInCart(addItemsToCart({ productId, productImage, productTitle, productPrice, productCount }))
        addedToCartNotification()
    }




    return (
        <div className='w-full'>
            <button
                className='text-sm md:text-lg w-full md:font-bold p-2 md:p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150  active:bg-slate-900 active:text-white'
                onClick={() => addToCart(product.id, product.title, product.image, product.price, quantity)}
            >Add To Cart</button>

        </div>
    )
}

export default AddToCartButton
