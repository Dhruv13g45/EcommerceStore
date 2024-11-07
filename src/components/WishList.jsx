import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProductsInWishList, removeProductInWishList } from '../redux/slices/wishListSlice'
import EmptyWishList from "../assets/EmptyWishList.png"
import toast, { Toaster } from 'react-hot-toast';

const WishList = () => {

    const wishListArray = useSelector((state) => state.wishList.products)
    const dispatchInWishList = useDispatch();
    const allProductsRemoved = () => toast('All Products removed from the Wishlist');



    const removeFromWishList = (productId) => {
        try {
            dispatchInWishList(removeProductInWishList({ productId }))
        }
        catch (error) {
            console.log(error)
        }
    }

    const removeAllProducts = () => {
        try {
            dispatchInWishList(removeAllProductsInWishList());
            allProductsRemoved()
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='w-full overflow-hidden mt-5'>





            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3'>

                {
                    wishListArray.length > 0 ? wishListArray.map((listElement) => (
                        <div key={listElement.productId} className='w-full rounded-xl text-center shadow-2xl p-3 flex flex-col justify-evenly items-center gap-3'>
                            <div className='w-[200px] h-[300px] overflow-y-hidden flex justify-center items-center'>
                                <img src={listElement.productImage} alt={listElement.productTitle} className='w-full' />
                            </div>
                            <h1 className='font-bold text-md md:text-xl mb-2'>{listElement.productTitle}</h1>
                            <div className='w-full rounded-xl flex flex-col justify-center items-center gap-3'>
                                <button
                                    className='text-[10px] md:text-md lg:text-lg w-[80%] mb-3 font-bold p-1 md:p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150 active:bg-slate-900'
                                    onClick={() => removeFromWishList(listElement.productId)}
                                >Remove From WishList</button>
                            </div>
                        </div>
                    ))
                        :
                        <div className='text-center w-[100vw] mt-10 text-2xl flex flex-col justify-center gap-3 items-center'>
                            <div>
                                <h1 className='text-4xl font-medium  mb-2'>OOPS.....!</h1>
                                <h1 className='text-2xl'>Your WishList is Empty 💔</h1>
                            </div>
                            <img src={EmptyWishList} alt="Empty cart image" className='w-[300px] rounded-xl' />
                        </div>
                }
            </div>

            {
                wishListArray.length > 0 ?
                    <button
                        className='text-lg w-auto font-bold mt-3 p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'
                        onClick={() => removeAllProducts()}
                    >Remove All Products</button>
                    :
                    <></>
            }
        </div>
    )
}

export default WishList
