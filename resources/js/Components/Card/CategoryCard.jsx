import React from 'react';

export default function Card({ name, img = "", desc, href }) {
    return (
        <div className="z-0">
            <div className="md:w-[115px] w-[80px] md:h-[175px] h-[121px] text-center flex flex-col justify-center items-center p-4 font-bold bg-white shadow-md hover:bg-yellow-300 hover:scale-105 hover:cursor-pointer transition duration-200 border-none border rounded-full">
                <img className="" src={img} alt="" />
            <a href={href} class="md:text-base text-xs w-full">
                <p>{name}</p>
            </a>
            </div>
        </div>
    );
}
