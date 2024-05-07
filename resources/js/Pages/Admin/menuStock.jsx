import NavbarAdmin from "@/Components/NavbarAdmin";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function menuStock({ menus }) {
    const [search, setSearch] = useState('');
    const [originalItems, setOriginalItems] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const [localStocks, setLocalStocks] = useState(() => {
        const initialStocks = {};
        menus.forEach(menu => {
            initialStocks[menu.name] = menu.stock;
        });
        return initialStocks;
    });
    
    useEffect(() => {
        setOriginalItems([...document.querySelectorAll('.all_menu')]);
    }, []);
    
    const handleSearch = (e) => {
        setSearch(e.target.value.toUpperCase());
    };

    useEffect(() => {
        const filteredResults = originalItems.filter(item => {
            const txtValue = item.textContent || item.innerText;
            return txtValue.toUpperCase().indexOf(search) > -1;
        });
        const updatedResults = filteredResults.map(item => {
            const txtValue = item.textContent || item.innerText;
            const separatorIndex = txtValue.toUpperCase().indexOf("RP");
            const itemName = txtValue.substring(0, separatorIndex).trim();
            return {
                itemName: itemName,
                element: item
            };
        });
        setSearchResults(updatedResults);
    }, [search, originalItems]);

    console.log(originalItems)
    const handleStockChange = (menuName, value) => {
        setLocalStocks(prevState => ({
            ...prevState,
            [menuName]: value >= 0 ? value : 0
        }));
    };

    const handleClick = (menuName) => {
        const stock = localStocks[menuName];
        router.post("/set-stock", { name: menuName, stock });
    }

    return (
        <div className="">
            <NavbarAdmin/>
            <form className="flex justify-between w-full" action="">
                    <input
                        type="text" onChange={handleSearch} value={search}
                        className="bg-transparent border-none md:py-4 py-2 md:px-10 px-5 text-black md:text-lg text-sm leading-tight focus:border-transparent focus:ring-0 focus:shadow-outline placeholder-gray-400"
                        placeholder="Search..."
                    />
                </form>
                {search != '' ? (
                    searchResults.length > 0 ? (
                        <div className="">
                            {searchResults.map((result, index) => (
                                menus.filter((menu) => menu.name == result.itemName).map((menu) => (
                                    <div key={menu.name} id={`${menu.name}`} className="flex md:border md:rounded-lg md:py-4 md:px-6 z-0">
                                        <div className="w-[92px] md:w-[172px] cursor-pointer text-center">
                                            <img src={`${menu.image}`} alt="Menu Photo" className='w-full rounded-lg'/>
                                        </div>
                                        <div className="flex-1 pl-[15px] md:pl-[30px] space-y-1 md:space-y-2 w-[150px] h-auto">
                                            <a className="">
                                                <p className='text-[#222126] text-[14px] md:text-[20px] font-semibold'>{menu.name}</p>
                                                <p className='flex text-[#42754C] font-bold space-x-1'>{menu.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                                <p className='mb-0 text-[#828282] font-medium text-[11px] md:text-[12px]'>{menu.desc}</p>
                                            </a>
                                            <div className="flex self-end">
                                                <input type="number" className='mx-3' value={localStocks[menu.name] || 0} onChange={(e) => handleStockChange(menu.name, parseInt(e.target.value))} />
                                                <button onClick={() => handleClick(menu.name)} className="bg-[#42754c49] text-gray-600 hover:bg-gray-300 rounded-full px-2.5">Set Stock</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ))}
                        </div>
                        ) : (
                            <div className="md:flex-1 md:pl-[80px] space-y-[50px]">
                                <p>not found</p>
                            </div>
                        )): (
                    <div className="">
                        {menus.map((menu) => (
                            <div key={menu.name} id={`${menu.name}`} className="all_menu flex md:border md:rounded-lg md:py-4 md:px-6 z-0">
                                <div className="w-[92px] md:w-[172px] cursor-pointer text-center">
                                    <img src={`${menu.image}`} alt="Menu Photo" className='w-full rounded-lg'/>
                                </div>
                                <div className="flex-1 pl-[15px] md:pl-[30px] space-y-1 md:space-y-2 w-[150px] h-auto">
                                    <a className="">
                                        <p className='text-[#222126] text-[14px] md:text-[20px] font-semibold'>{menu.name}</p>
                                        <p className='flex text-[#42754C] font-bold space-x-1'>{menu.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                        <p className='mb-0 text-[#828282] font-medium text-[11px] md:text-[12px]'>{menu.desc}</p>
                                    </a>
                                    <div className="flex self-end">
                                        <input type="number" className='mx-3' value={localStocks[menu.name] || 0} onChange={(e) => handleStockChange(menu.name, parseInt(e.target.value))} />
                                        <button onClick={() => handleClick(menu.name)} className="bg-[#42754c49] text-gray-600 hover:bg-gray-300 rounded-full px-2.5">Set Stock</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                        )}
        </div>
    )
}
