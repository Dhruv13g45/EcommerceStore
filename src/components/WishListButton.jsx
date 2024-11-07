import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductInWishList } from '../redux/slices/wishListSlice';
import toast, { Toaster } from 'react-hot-toast';

const WishListButton = ({ product }) => {


    const dispatchProductInWishList = useDispatch();
    const addedToWishList = () => toast('Item Added to WishList 🎉');



    const addInWishList = (productId, productImage, productTitle) => {
        try {
            dispatchProductInWishList(addProductInWishList({ productImage: productImage, productTitle: productTitle, productId: productId }))
            addedToWishList()
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='w-full'>
            <button
                className='text-sm md:text-lg w-full md:font-bold p-2 md:p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150  active:bg-slate-900 active:text-white'
                onClick={() => addInWishList(product.id, product.image, product.title)}
            >Add To WishList</button>
        </div>
    )
}

export default WishListButton
