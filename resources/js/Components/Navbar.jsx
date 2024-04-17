import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineSort, MdOutlineShoppingBasket } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
             <div className={`fixed z-[999] flex justify-between w-full h-20 items-center py-4 font-nunito sm:px-10 px-7 ${scrolled ? 'bg-white bg-opacity-85' : ''} transition duration-700`}>
                <div className="flex items-center md:justify-evenly w-1/2 h-full">
                    <div className="logonama flex gap-0 items-center">
                        <a href="/" className="max-w-20 min-w-16">
                            <img src="/images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="md:hidden lg:flex justify-center sm:gap-2 hidden">
                        <MdOutlineSort size="1.5em" className=" "/>
                        <form action="">
                            <select name="Category" id="" className="appearance-none border-none p-0 pr-7 font-extrabold bg-transparent">
                                <option value="">Categories</option>
                                <option value="main">Main Dishes</option>
                                <option value="side">Side Dishes</option>
                                <option value="drink">Drinks</option>
                            </select>
                        </form>
                    </div>
                    <div className="flex md:ml-0 ml-10 justify-center gap-3">
                        <a className="items-center lg:flex hidden">
                            <BsTelephone />
                            <span className="ml-3 font-extrabold" >Contact Us</span>
                        </a>
                        <div className="flex justify-center gap-5 items-center">
                        <a href="">
                            <FaInstagram size="1.5em" class="transition duration-300 hover:text-pink-500"/>
                        </a>
                        <a href="https://wa.me/081360332002">
                            <FaWhatsapp size="1.5em" class="transition duration-300 hover:text-green-500"/>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end lg:mr-20 w-1/2">
                    <a href="/signup" className="md:hidden font-extrabold mr-5 flex items-center transition duration-300 hover:text-yellow-500 text-base"> 
                        <MdPersonOutline size="1.5em" class=""/>
                    </a>
                    <a href="/signup" className="lg:ml-3 hidden font-extrabold lg:mr-8 md:mr-5 md:flex items-center transition duration-300 hover:text-gray-700 lg:sm:text-base md:text-sm"> 
                        <MdPersonOutline size="1.3em" class="mr-2"/>Account / History
                    </a>
                    <a className="flex items-center" href="/cart">
                        <span className=" hidden md:flex bg-[#353434] text-white lg:py-4 py-2 lg:px-10 px-5 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px] hover:shadow-inner transition duration-300 hover:bg-[#4e4d4d] text-xs lg:text-base" >
                            <MdOutlineShoppingBasket size="1.3em" class="mr-2"/>Your Cart
                        </span>
                        <span className="md:hidden flex bg-[#353434] text-white py-3 px-6 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px] hover:shadow-inner transition duration-300 hover:bg-[#4e4d4d] text-xs md:text-base" >
                            <MdOutlineShoppingBasket size="1.4em" class=""/>
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}
