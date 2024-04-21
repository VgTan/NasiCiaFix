import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import CategoryCard from "@/Components/Card/CategoryCard";
import Card from "@/Components/Card/Card";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import { TbShoppingBagPlus } from "react-icons/tb";

const Home = ({ menus }) => {
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    const [selectedItems, setSelectedItems] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addSelectedItems = (id) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1,
        }));
    };

    const minusSelectedItems = (id) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [id]: Math.max((prevState[id] || 0) - 1, 0),
        }));
    };

    function updateSelectedItems(itemId, quantity) {
        if (storedItems[itemId]) {
            storedItems[itemId] += quantity;
        } else {
            storedItems[itemId] = quantity; 
        }
    }
    

    const handleAddToCart = () => {
        setIsCartOpen(true);
    };

    return (
        <>
        <div className="absolute"></div>
        <div class="pattern-wavy pattern-yellow-500 pattern-bg-white 
  pattern-size-32 pattern-opacity-10"></div>
            <div className="absolute right-0 overflow-hidden md:px-12 z-[-1]">
                <div className="bg-yellow-500 md:p-72 rounded-bl-[100px] md:-skew-x-[11deg] lg:translate-x-20 md:translate-x-52 lg:scale-x-110 md:block hidden"></div>
            </div>
            <Navbar />
            <div className="absolute w-full h-screen z-[-1] left-0 top-0 bg-yellow-500"></div>
            <div className="absolute w-full h-screen z-[-1] left-0 top-0 curves"></div>
            <div>
                <ul class='circles'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="md:px-10 md:py-20 py-16 font-nunito z-1 overflow-x-hidden">
                <div className="rounded-xl md:p-10 p-8 flex flex-wrap w-full">
                    <div className="md:w-1/2 w-full md:grid gap-3">
                        <div className="text-right md:w-1/2 lg:w-full">
                            <div className="lg:text-6xl text-4xl font-bold text-left">
                                Nasi Cia: Where Taste and{" "}
                                <span className="text-[#42754C] underline underline-offset-8">
                                    Warmth Blend
                                </span>
                            </div>
                            <div className="md:text-base text-sm md:mt-10 mt-5 text-left text-zinc-600 leading-loose">
                                Kami berkomitmen untuk terus menyajikan hidangan
                                yang berkualitas, menciptakan suasana nyaman.
                                Nasi cia akan menjadi lebih dari sekedar tempat
                                makan, Namun tetap dimana rasa dan kehangatan
                                bertemu.
                            </div>
                        </div>
                        <div className="mt-5 flex">
                            <div className="md:w-4/5 w-full">
                                <div className="flex gap-2 md:mb-3 mb-2 font-semibold md:text-base text-xs">
                                    <span>
                                        <AiOutlineCompass
                                            size="1.5em"
                                            fontWeight="100"
                                        />
                                    </span>
                                    <span>My Location</span>
                                    <span className="text-slate-200">|</span>
                                    <span>
                                        New York,{" "}
                                        <span className="text-[#1BCF92]">
                                            Left Side Blue Door
                                        </span>
                                    </span>
                                </div>
                                <div className="bg-white border border-slate-200 items-center justify-between w-full flex md:p-2 md:mb-10 mb-5 sticky top-5 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px]">
                                    <form className="flex justify-between w-full" action="">
                                        <input
                                            type="text"
                                            className="bg-transparent border-none md:py-4 py-2 md:px-10 px-5 text-black md:text-lg text-sm leading-tight focus:border-transparent focus:ring-0 focus:shadow-outline placeholder-gray-400"
                                            placeholder="Search..."
                                        />
                                        <button className="bg-[#353434] text-white md:py-4 py-2 px-5 md:px-10 rounded-tr-[50px] rounded-br-[20px] rounded-bl-[50px] rounded-tl-[20px] hover:shadow-inner hover:bg-[#4e4d4d]">
                                            <MdOutlineSearch className="w-10 h-6 text-white" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="font-semibold text-[#BDBDBD] md:text-base text-sm">
                                <span>Popular Category</span>
                            </div>
                            <div className="flex flex-start md:justify-evenly gap-3 mt-4 w-full overflow-x-auto overflow-y-hidden">
                                <CategoryCard
                                    img="/images/cat/bowl.png"
                                    name="Rice Bowl"
                                />
                                <CategoryCard
                                    img="/images/cat/drink.png"
                                    name="Drink"
                                />
                                <CategoryCard
                                    img="/images/cat/mentai.png"
                                    name="Mentai"
                                />
                                <CategoryCard
                                    img="/images/cat/nusan.png"
                                    name="Nusantara"
                                />
                                <CategoryCard
                                    img="/images/cat/snack.png"
                                    name="Snack"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 -mt-12 md:block hidden">
                        <img src="/images/ricemain.png" alt="" />
                    </div>
                </div>
                <div className="mt-12 px-16">
                    <div className="flex mt-10 md:mt-[60px] flex-col md:flex-row">
                        <div className="md:w-[230px] sticky">
                            <div id="sticky">
                                <ul class="overflow-auto flex whitespace-nowrap md:whitespace-normal flex-row md:flex-col md:space-y-8 items-end border-b b-[#EAEAEA] md:border-b-0 pb-4 md:pb-0 mb-4 md:mb-0">
                                {menus.filter((menu, index, self) => 
                                    index === self.findIndex((m) => (
                                        m.category === menu.category
                                    ))
                                ).map(menu => (
                                    <li className="mr-4 md:mr-0 text-right">
                                        <a href={`#${menu.category}`} className="text-[14px] md:text-[20px] font-semibold hover:text-[#42754C] cursor-pointer text-extrabold">
                                            <span>{menu.category}</span>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:flex-1 md:pl-[80px] space-y-[50px]">
                            <div className="Rice Bowl">
                                <div className="mb-3 top-0">
                                    <div className="uppercase text-[#222126] text-[14px] md:text-[32px] font-extrabold mb-7 md:mb-[18px]">RICE BOWL</div>
                                </div>
                                <div id="Chicken Rice Bowl" className="text-xl text-start font-bold mb-3 text-[#42754C]">
                                    Chicken Rice Bowl
                                </div>
                    
                                {/* <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-3"> */}
                                <div className="flex flex-wrap gap-5">
                                    {menus
                                        .filter(
                                            (menu) =>
                                                menu.category ===
                                                "Chicken Rice Bowl"
                                        )
                                        .map((menu) => (
                                            <Card
                                                id={menu.id}
                                                name={menu.name}
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                    
                    
                                {/* Fish Rice Bowl */}
                                <div className="mb-5 mt-10">
                                    <div id="Fish Rice Bowl" className="text-xl text-start font-bold mb-3 text-[#42754C]">
                                        Fish Rice Bowl
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-5">
                                    {menus
                                        .filter(
                                            (menu) =>
                                                menu.category ===
                                                "Fish Rice Bowl"
                                        )
                                        .map((menu) => (
                                            <Card
                                                id={menu.id}
                                                name={menu.name}
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                    
                                {/* Shrimp Rice Bowl */}
                                <div className="mb-5 mt-10">
                                    <div id="Shrimp Rice Bowl" className="text-xl text-start font-bold mb-3 text-[#42754C]">
                                        Shrimp Rice Bowl
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-5">
                                    {menus
                                        .filter(
                                            (menu) =>
                                                menu.category ===
                                                "Shrimp Rice Bowl"
                                        )
                                        .map((menu) => (
                                            <Card
                                                id={menu.id}
                                                name={menu.name}
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                    
                                {/* Beef Rice Bowl */}
                                <div className="mb-5 mt-10">
                                    <div id="Beef Rice Bowl" className="text-xl text-start font-bold mb-3 text-[#42754C]">
                                        Beef Rice Bowl
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-5">
                                    {menus
                                        .filter(
                                            (menu) =>
                                                menu.category ===
                                                "Beef Rice Bowl"
                                        )
                                        .map((menu) => (
                                            <Card
                                                id={menu.id}
                                                name={menu.name}
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                            <div>
                                <ul class='circles'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            {/* Drink */}
                            <div className="Drink mt-10">
                                <div className="mb-5 sticky top-0">
                                    <div id="Drink" className="text-4xl">DRINKS</div>
                                </div>
                                <div className="flex flex-wrap gap-5 justify-start">
                                    {menus
                                        .filter(
                                            (menu) => menu.category === "Drink"
                                        )
                                        .map((menu) => (
                                            <Card
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                id={menu.id}
                                                name={menu.name}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                            <div>
                                <ul class='circles'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            {/* MENTAI RICE */}
                            <div className="MENTAI RICE mt-10">
                                <div className="mb-5 sticky top-0">
                                    <div id="Mentai Rice" className="text-4xl">MENTAI RICE</div>
                                </div>
                                <div className="flex flex-wrap gap-5 justify-start">
                                    {menus
                                        .filter(
                                            (menu) =>
                                                menu.category === "Mentai Rice"
                                        )
                                        .map((menu) => (
                                            <Card
                                                id={menu.id}
                                                name={menu.name}
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                            <div>
                                <ul class='circles'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            {/* NUSANTARA */}
                            <div className="NUSANTARA mt-10">
                                <div className="mb-5 sticky top-0">
                                    <div id="Nusantara" className="text-4xl">NUSANTARA</div>
                                </div>
                                <div className="flex flex-wrap gap-5 justify-start">
                                    {menus
                                        .filter(
                                            (menu) =>
                                                menu.category === "Nusantara"
                                        )
                                        .map((menu) => (
                                            <Card
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                id={menu.id}
                                                name={menu.name}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                            {/* SNACK */}
                            <div className="SNACK mt-10">
                                <div className="mb-5 sticky top-0">
                                    <div id="Snack" className="text-4xl">SNACK</div>
                                </div>
                                <div className="flex flex-wrap gap-5 justify-start">
                                    {menus
                                        .filter(
                                            (menu) => menu.category === "Snack"
                                        )
                                        .map((menu) => (
                                            <Card
                                                price={menu.price}
                                                desc={menu.description}
                                                img = {menu.image}
                                                id={menu.id}
                                                name={menu.name}
                                                addSelectedItems={
                                                    addSelectedItems
                                                }
                                                minusSelectedItems={
                                                    minusSelectedItems
                                                }
                                                quantity={
                                                    selectedItems[menu.id] || 0
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="fixed bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
                >
                    Add to Cart
                </button>
                {isCartOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                        <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                            <div className="flex items-center gap-4">
                                <span className="shrink-0 rounded-full bg-[#42754ce0] p-2 text-white">
                                    <TbShoppingBagPlus className="h-4 w-4"/>
                                </span>
                                <h2 className="text-2xl font-bold sm:text-lg">
                                Added to Cart
                                </h2>
                            </div>
                            <ul className="mt-4">
                                {localStorage.setItem(
                                    "selectedItems",
                                    JSON.stringify(selectedItems)
                                )}
                                {Object.entries(selectedItems).map(
                                    ([id, quantity]) =>
                                        
                                        quantity != 0 ? (
                                            updateSelectedItems(id, quantity),
                                            localStorage.setItem('selectedItems', JSON.stringify(storedItems)),
                                            <li key={id} className="flex py-2 px-4 flex-row justify-between border-b border-gray-200">
                                                <span className="text-left mr-5">
                                                {" "}
                                                {
                                                    menus.find(
                                                        (menu) => menu.id == id
                                                    ).name
                                                }
                                                </span>
                                                <span className="mr-5">
                                                    {quantity} pcs
                                                </span>
                                                <span className="">
                                                    {(
                                                        menus.find((menu) => menu.id == id).price * quantity
                                                    ).toLocaleString("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    })}
                                                </span>
                                            </li>
                                        ) : null
                                )}
                            </ul>
                            <div className="mt-6 sm:flex sm:gap-4">
                            <button onClick={() => setIsCartOpen(false)} className="inline-block w-full rounded-lg bg-[#42754ce0] px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto">
                                Close
                            </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
