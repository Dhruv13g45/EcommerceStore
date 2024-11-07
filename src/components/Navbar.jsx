import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import '../App.css'





const Navbar = () => {

    const [clicked, setClicked] = useState(false)




    const toggleNavbar = () => {
        setClicked((prev) => !prev)
    }



    return (
        <div className='w-full flex justify-around items-start gap-3 px-4 lg:px-2  mb-5 z-[99] bg-[#ffffff82]'>
            <div className='w-[20%] h-[3rem] p-5 rounded-md md:rounded-lg bg-black flex items-center justify-center md:gap-3'>
                <img src={Logo} alt="Logo" className='w-[50px]' /> <span className='hidden md:inline-flex text-white'>GrabZLit</span>
            </div>

            <div className={`w-[70%] md:w-[80%] px-3 text-md md:h-auto bg-white border-black border rounded-lg md:border-none md:bg-transparent ${clicked ? "inline-flex" : "hidden"} md:flex flex-col md:flex-row md:justify-between md:items-center gap-3 absolute md:static mt-14 md:mt-0 right-7`}>
                <div className='w-full md:w-[60%] md:text-[10px] lg:text-md xl:text-lg flex flex-col md:flex-row justify-between items-center text-[20px]'>
                    <NavLink to="/"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >All Products</NavLink>
                    <NavLink to="menRoute"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >Men</NavLink>
                    <NavLink to="womenRoute"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >Women</NavLink>
                    <NavLink to="jewelleryRoute"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >Jewellery</NavLink>
                    <NavLink to="electronicsRoute"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >Electronics</NavLink>
                </div>

                <div className='w-full md:w-[40%] md:text-[10px] lg:text-md xl:text-lg flex flex-col md:flex-row justify-around items-center text-[20px]'>
                    <NavLink to="wishList"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >WishList</NavLink>
                    <NavLink to="cart"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >Cart</NavLink>
                    <NavLink to="orderHistory"
                        className={({ isActive }) => `${isActive ? "border border-black rounded-md hover:no-underline p-[3px] md:p-[5px]" : "text-black"} hover:underline hover:underline-offset-2 duration-300 ease-in-out w-full text-center`}
                    >Order History</NavLink>
                </div>
            </div>

            <div className='mr-5 w-[2rem] md:hidden h-[1.7rem] flex flex-col justify-between items-end' onClick={toggleNavbar}>
                <span className='w-full h-[5px] bg-black rounded-lg'></span>
                <span className='w-[70%] h-[5px] bg-black rounded-lg'></span>
                <span className='w-[50%] h-[5px] bg-black rounded-lg'></span>
            </div>
        </div>
    )
}

export default Navbar
