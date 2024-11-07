import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { removeAllItemsToCart, removeItemsToCart, increamentProductCount, decreamentProductCount } from '../redux/slices/cartSlice'
import EmptyCart from "../assets/EmptyCart.png"
import toast, { Toaster } from 'react-hot-toast';


const Cart = () => {

    const cartListArray = useSelector((state) => state.cart.cartItems)
    const dispatchProductsInCart = useDispatch();
    const orderGoodWish = () => toast('Thanks for Ordering 💝🫰🏻');

    const removeProductFromCart = (productId) => {
        try {
            dispatchProductsInCart(removeItemsToCart({ productId }))
        }
        catch (error) {
            console.log(error)
        }
    }

    const removeAllProducts = () => {
        try {
            dispatchProductsInCart(removeAllItemsToCart());
            orderGoodWish()
        }
        catch (error) {
            console.log(error)
        }
    }

    const increament = (productId) => {
        try {
            dispatchProductsInCart(increamentProductCount({ productId }))
        }
        catch (error) {
            console.log(error)
        }
    }

    const decreament = (productId) => {
        try {
            dispatchProductsInCart(decreamentProductCount({ productId }))
        }
        catch (error) {
            console.log(error)
        }
    }

    console.log(cartListArray)




    return (
        <div>





            <div className='w-full mt-3'>

                {
                    cartListArray.length > 0 ? cartListArray.map((listElement) => (
                        <>
                            <div key={listElement.productId} className='shadow-2xl overflow-hidden rounded-xl gap-10 flex flex-col md:flex-row justify-between items-center p-5'>
                                <img src={listElement.productImage} alt={listElement.productTitle} className='w-[300px] md:w-[50px] mt-10' />
                                <div className='w-full  text-center md:text-start px-4'>
                                    <h1 className='text-lg'>{listElement.productTitle}</h1>
                                </div>

                                <div className='flex justify-start items-center gap-3'>
                                    <p className='p-1 sm:p-3 rounded-[50%] bg-slate-200 shadow-2xl cursor-pointer' onClick={() => increament(listElement.productId)}><FaPlus /></p>
                                    <p>{listElement.productCount}</p>
                                    <p className='p-1 sm:p-3 rounded-[50%] bg-slate-200 shadow-2xl cursor-pointer' onClick={() => decreament(listElement.productId)}><FaMinus /></p>
                                </div>
                                <div>
                                    <h1 className="text-xl">{listElement.productPrice * listElement.productCount}</h1>
                                </div>
                                <button
                                    className='text-lg font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150  active:bg-slate-900 active:text-white'
                                    onClick={() => removeProductFromCart(listElement.productId)}
                                ><AiOutlineDelete className="w-10" /></button>
                            </div >

                        </>
                    ))
                        :
                        <div className='text-center w-full mt-20 text-2xl flex gap-3 flex-col justify-center items-center'>
                            <h1 className='text-2xl'>Your Cart is Empty 😕</h1>
                            <img src={EmptyCart} alt="Empty cart image" className='w-[300px] rounded-xl mb-3' />
                        </div>

                }
                {
                    cartListArray.length > 0 ?
                        <div className='w-full text-right p-3'>
                            <button
                                className='text-lg w-auto mt-3 font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'
                                onClick={() => removeAllProducts()}
                            >Checkout</button>
                        </div>
                        :
                        <></>
                }
            </div>
        </div >
    )
}

export default Cart
