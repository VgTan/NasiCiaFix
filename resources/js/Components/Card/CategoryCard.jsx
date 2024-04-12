import React from 'react';

export default function Card({ name, img = "", desc, href }) {
    return (
        <div className="z-0">
            <div className="w-[115px] h-[175px] flex flex-col justify-center items-center p-4 font-bold bg-[#F0F0F0] hover:bg-yellow-300 hover:scale-105 hover:cursor-pointer transition duration-200 border-none border rounded-full">
                <img src={img} alt="" />
            <a href={href} class="">
                <p>{name}</p>
            </a>
            </div>
        </div>
    );
}
