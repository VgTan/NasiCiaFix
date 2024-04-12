import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineSort, MdOutlineShoppingBasket } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function Navbar() {
    return (
        <>
            <div className="fixed z-[999] flex justify-between w-full h-20 items-center top-3 font-nunito mx-10">
                <div className="flex items-center justify-evenly w-2/4 h-full">
                    <div className="logonama flex gap-0 items-center">
                        <div className="w-20">
                            <img src="/images/logo.png" alt="" />
                        </div>
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
                            <FaInstagram size="1.5em" class="hover:text-pink-500"/>
                        </a>
                        <a href="https://wa.me/081360332002">
                            <FaWhatsapp size="1.5em" class="hover:text-green-500"/>
                        </a>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="flex flex-wrap justify-center mr-20">
                    <a className="flex items-center" href="/cart">
                        <MdOutlineShoppingBasket size="1.8em" class="mr-6"/>
                        <span className="bg-[#353434] text-white py-4 px-10 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px] hover:shadow-inner hover:bg-[#4e4d4d]" >Your Cart</span>
                    </a>
                </div>
            </div>
        </>
    );
}
