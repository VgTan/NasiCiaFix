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
             <div className={`fixed z-[999] flex justify-between w-full h-20 items-center top-0 py-4 font-nunito mx-10 ${scrolled ? 'bg-white' : ''}`}>
                <div className="flex items-center justify-evenly w-2/4 h-full">
                    <div className="logonama flex gap-0 items-center">
                        <a href="/" className="w-20">
                            <img src="/images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                    <MdOutlineSort size="1.5em" className=" "/>
                        <form action="">
                            <select name="Category" id="" class="appearance-none border-none p-0 pr-7 font-extrabold bg-transparent">
                                <option value="">Categories</option>
                                <option value="main">Main Dishes</option>
                                <option value="side">Side Dishes</option>
                                <option value="drink">Drinks</option>
                            </select>
                        </form>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a className="flex items-center">
                            <BsTelephone />
                            <span className="ml-3 font-extrabold" >Contact Us</span>
                        </a>
                        <div className="flex flex-wrap justify-center gap-5 ml-7">
                        <a href="">
                            <FaInstagram size="1.5em" class="transition duration-300 hover:text-pink-500"/>
                        </a>
                        <a href="https://wa.me/081360332002">
                            <FaWhatsapp size="1.5em" class="transition duration-300 hover:text-green-500"/>
                        </a>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="flex flex-wrap justify-center mr-20">
    
                    <>
                    <a href="/signup" className="ml-3 font-extrabold mr-8 flex items-center transition duration-300 hover:text-white"> 
                        <MdPersonOutline size="1.3em" class="mr-2"/>Account
                    </a>
                    </>
             
                    <a className="flex items-center" href="/cart">
                        <span className="flex flex-wrap bg-[#353434] text-white py-4 px-10 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px] transition duration-300 hover:shadow-inner transition duration-300 hover:bg-[#4e4d4d]" >
                            <MdOutlineShoppingBasket size="1.3em" class="mr-2"/>Your Cart
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}
