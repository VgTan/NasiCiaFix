import { router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Card({
    id,
    name,
    img,
    desc,
    href,
    quantity,
    addSelectedItems,
    minusSelectedItems,
    price,
    stock,
    disc,
    menus
}) {

    const[like, setLike] = useState(0);
    const newPrice = (disc_val, curr_price) => {
        const newPrice = curr_price - (curr_price * disc_val) / 100;
        return newPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });
    };

    const getLikeCount = (id, menus) => {
        const menuItem = menus.find((item) => item.id == id);
        return menuItem.like_count;
    }

    const handleAddToSelectedItems = () => {
        addSelectedItems(id);
    };

    const handleRemoveFromSelectedItems = () => {
        minusSelectedItems(id);
    };

    const [isLiked, setIsLiked] = useState(false);

    const handleHeartClick = async(id, e) => {
        e.preventDefault();
        if(isLiked) {
            setLike(like-1);
        }
        else {
            setLike(like + 1);  
        }
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        const menuItem = menus.find(menu => menu.id == id);
        if (menuItem) {
            setLike(menuItem.like_count);
        }
    }, [id, menus]);

    useEffect(() => {
        const handleBeforeUnload = async () => {
            if (isLiked) {
                router.post('/menu_like', { id });
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isLiked, id, router]);

    return (
        <div id={`${name}`} className="flex md:border md:rounded-lg md:py-4 md:px-6 z-0">
            <div className="relative w-[92px] md:w-[172px] cursor-pointer text-center">
                <button className="absolute top-2 left-2 bg-white rounded-full p-1.5 cursor-pointer" onClick={(e) => handleHeartClick(id, e)}>
                    {isLiked ? (
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                    </svg>
                    ) : (
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                    </svg>
                    )}
                    <p className="text-xs">{like}</p>
                </button>
                <img src={`${img}`} alt="Menu Photo" className='w-full rounded-lg'/>
                <div className="text-[#b6b6b6] md:text-xs mt-1">
                    <span>Stock: </span>
                    <span className="">{stock}</span>
                </div>
            </div>
            <div className="flex-1 pl-[15px] md:pl-[30px] space-y-1 md:space-y-2 w-[150px] h-auto">
                <a href={href} className="">
                    <p className="text-[#222126] text-[14px] md:text-[20px] font-semibold">
                        {name}
                    </p>
                    {disc ? (
                        <div className="">
                            <p className="flex text-[#898989] text-[5px] md:text-[11px] font-bold space-x-1 line-through">
                                {price.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </p>
                            <p className="flex text-[#42754C] font-bold space-x-1">
                                {newPrice(disc, price)}
                            </p>
                        </div>
                    ) : (
                        <p className="flex text-[#42754C] font-bold space-x-1">
                            {price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                        </p>
                    )}
                    <p className="mb-0 text-[#828282] font-medium text-[11px] md:text-[12px]">
                        {desc}
                    </p>
                </a>
                {stock > 0 ? (
                    <div className="flex self-end">
                        <button
                            onClick={handleRemoveFromSelectedItems}
                            disabled={quantity === 0}
                            className="bg-[#42754c49] text-gray-600 hover:bg-gray-300 rounded-full px-2.5"
                        >
                            -
                        </button>
                        <span className="mx-3">{quantity}</span>
                        <button
                            onClick={handleAddToSelectedItems}
                            disabled={quantity === stock}
                            className="bg-[#42754c49] text-gray-600 hover:bg-gray-300 rounded-full px-2.5"
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <div className="text-red-500">
                        <p>OUT OF STOCK</p>
                    </div>
                )}
            </div>
        </div>
    );
}
