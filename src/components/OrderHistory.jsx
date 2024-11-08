import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retriveOrderHistory, removeOrderHistory } from '../redux/slices/cartSlice'
import OrderHistoryImage from "../assets/OrderHistoryImage.png"
import toast, { Toaster } from 'react-hot-toast';

const OrderHistory = () => {

    const dispatchLocalStorage = useDispatch()
    const orderHistory = useSelector((state) => state.cart.orderHistory)
    console.log(orderHistory)
    const allProductsRemoved = () => toast('Products removed from order history.');

    const removeLocalStorage = () => {
        dispatchLocalStorage(removeOrderHistory())
        allProductsRemoved()
        location.reload()
    }

    useEffect(() => {
        dispatchLocalStorage(retriveOrderHistory())
    }, [])



    return (
        <div className='w-full p-3 mt-10'>
            {
                orderHistory.length > 0 ?
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5' key={orderHistory.productId}>
                        {
                            orderHistory.map((order) => (
                                <div key={order.productId} className='flex flex-col justify-between items-center p-5 rounded-xl shadow-2xl'>
                                    <div className='w-full h-[300px] overflow-hidden flex justify-center items-center'>
                                        <img src={order.productImage} alt={order.productTitle} className='w-full' />
                                    </div>
                                    <div className='mt-3'>
                                        <h1 className='font-bold text-[10px] md:text-md'>{order.productTitle}</h1>
                                        <h2 className='font-bold text-lg'>Price: ${order.productPrice}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className='w-full flex flex-col justify-center items-center mt-14'>
                        {/* <h1 className='text-center text-2xl '>Come on... Order Something!!</h1> */}
                        <img src={OrderHistoryImage} alt="order History photo" className='rounded-xl h-[300px] w-[300px] mt-5' />
                    </div>
            }

            {
                orderHistory.length > 0
                    ?
                    <div className='w-full text-right p-3'>
                        <button
                            className='text-lg w-auto mt-3 font-bold p-3 hover:border-[3px] bg-black text-white hover:border-black rounded-md hover:bg-white hover:text-black duration-150'
                            onClick={() => removeLocalStorage()}
                        >Clear Order History</button>
                    </div>
                    :
                    <></>

            }
        </div>
    )
}

export default OrderHistory
