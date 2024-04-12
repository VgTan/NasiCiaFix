import React, { useState } from 'react';

export default function Card({ id, name, img, desc, href, quantity, addSelectedItems, minusSelectedItems, price}) {

    const handleAddToSelectedItems = () => {
        addSelectedItems(id);
    };

    const handleRemoveFromSelectedItems = () => {
        minusSelectedItems(id);
    };

    return (
        <div className="flex md:border md:rounded-lg md:py-4 md:px-6 z-0">
            <div className="w-[92px] md:w-[172px] cursor-pointer">
                {/* <img src="" alt="" /> */}
                <img src={`${img}`} alt="Menu Photo" className='w-full rounded-lg'/>
            </div>
            <div className="flex-1 pl-[15px] md:pl-[30px] space-y-1 md:space-y-2 w-[150px] h-auto">
                <a href={href} className="">
                    <p className='text-[#222126] text-[14px] md:text-[20px] font-semibold'>{name}</p>
                    <p className='flex text-[#42754C] font-bold space-x-1'>{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                    <p className='mb-0 text-[#828282] font-medium text-[11px] md:text-[12px]'>{desc}</p>
                </a>
                <div className="flex self-end">
                    <button onClick={handleRemoveFromSelectedItems} disabled={quantity === 0} className="bg-[#42754c49] text-gray-600 hover:bg-gray-300 rounded-full px-2.5">-</button>
                    <span className='mx-3'>{quantity}</span>
                    <button onClick={handleAddToSelectedItems} className="bg-[#42754c49] text-gray-600 hover:bg-gray-300 rounded-full px-2.5">+</button>
                </div>
            </div>
        </div>
    );
}
