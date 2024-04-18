import React, { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import { router } from '@inertiajs/react';
import { TiArrowBackOutline } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = ({ menus }) => {
    const [storedItems, setStoredItems] = useState(JSON.parse(localStorage.getItem('selectedItems')) || {});
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [table_num, setTableNum] = useState('');

    useEffect(() => {
        const names = Object.entries(storedItems).map(([id, quantity]) => {
            return quantity !== 0 ? menus.find(menu => menu.id == id).name : null;
        }).filter(name => name !== null);

        setName(names);

        const quan = Object.entries(storedItems).map(([id, quantity]) => {
            return quantity;
        }).filter(name => name !== null);

        setQty(quan);
    }, []);

    const handleQuantityChange = (id, delta) => {
    const newQuantity = storedItems[id] + delta;
        if (newQuantity >= 0) { 
            setStoredItems(prevStoredItems => ({
            ...prevStoredItems,
            [id]: newQuantity
            }));
        }
    };
    const total_price = Object.entries(storedItems).reduce((total, [id, quantity]) => {
        const menu = menus.find(menu => menu.id == id);
        if (menu) {
            return total + menu.price * quantity;
        } else {
            return total;
            }
    }, 0);
    const total_price_tax = total_price + (total_price * 0.1);
    useEffect(() => {
        localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    }, [storedItems]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        router.post("/checkout", {total_price, name, qty, table_num})
    }
    return (
        <>
            <Navbar />
            <div className="pt-32 px-4 md:px-20 flex flex-col md:flex-col lg:flex-row font-nunito">
                <div className="w-full md:w-1/2 mr-0 md:mr-10 mb-8 md:mb-0 lg:w-full">
                    <div className="flex flex-wrap">    
                        <MdOutlineShoppingCart className="text-2xl font-bold"/>
                        <h1 className="font-bold text-2xl mb-8 ml-2 -mt-1">YOUR CART</h1>
                    </div>
                <form action="" className="">
                    {Object.entries(storedItems).map(([id, quantity]) => (
                        quantity !== 0 ? (
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              <li key={id} className="flex py-6">
                                <div className="h-20 w-20 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-md">
                                  <img
                                    src={`${menus.find(menu => menu.id == id).image}`}
                                    alt="Menu Image"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div className='-mb-2 md:mb-2 font-bold'>
                                        <div className="flex justify-between text-gray-900 flex-col md:flex-row">
                                            <h3>
                                                <input className="border-0 md:text-lg text-md" type="text" value={menus.find(menu => menu.id == id).name} name="name" disabled />
                                            </h3>
                                            <input className="-mt-3 border-0 md:text-right md:text-lg text-[#42754C]" type="text" value={`Rp. ${menus.find(menu => menu.id == id).price * quantity}`} name="price" disabled />
                                        </div>
                                    </div>
                                    <p className='hidden md:block md:text-sm md:ml-5 md:mb-2 md:font-thin'> Quantity </p>
                                    <div className="ml-32 md:ml-4 -mb-4 md:mb-0 flex items-center p-1 border rounded-md border-slate-300 w-min h-6 md:h-8">
                                        <button className="bg-transparent px-3 py-1" onClick={() => handleQuantityChange(id, -1)}>-</button>
                                        <input className="border-none w-10 bg-transparent text-center px-3 py-1" type="text" value={quantity} readOnly />
                                        <button className="bg-transparent px-3 py-1" onClick={() => handleQuantityChange(id, 1)}>+</button>
                                    </div>       
                                </div>
                              </li>
                              <div className="border-t-8 border-gray-300 h-6"></div>
                            </ul>
                        ) : null
                    ))}
                    <br />
                </form>
                </div>
                <div className="p-4 md:p-8 px-8 md:px-12 w-full md:w-full lg:w-3/5 shadow-lg">
                    <div className="flex justify-between mb-4">
                        <p className='font-bold text-lg'>The Total Amount: </p>
                    </div>
                    <div className="flex flex-col mt-8 mb-4">
                        <div className="flex justify-between mb-4">
                            <p className="">Total Price:</p>
                            <p className="">Rp {total_price}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Tax:</p>
                                <p className="">Rp {total_price * 0.1}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 h-6"></div>
                    <div className="flex justify-between mb-10 font-semibold">
                        <p className="">Total Price include Tax:</p>
                        <p className="">Rp {total_price_tax}</p>
                    </div>
                    <div className="flex justify-between mb-10 font-semibold items-center">
                        <p className="">Table Number:</p>
                        <input type="number" className="w-1/3" value={table_num} onChange={(e) => setTableNum(e.target.value)}/>
                    </div>
                    <form onSubmit={handleSubmit} className='drop-shadow-sm'>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 w-full">Checkout</button>
                        <a href="/" className="text-black px-2 py-2 rounded-3xl w-full flex mt-4 font-bold hover:text-gray-800">
                            <TiArrowBackOutline className="text-2xl font-thin mr-2 -mt-0.5"/>
                            Back to Shopping
                        </a>
                    </form>
                </div>
            </div>
            <script type="text/javascript">
            
            </script>
        </>
    );
};

export default Cart;
