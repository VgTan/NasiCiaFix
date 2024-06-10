import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import { router } from "@inertiajs/react";
import { TiArrowBackOutline } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = ({ AllMenu }) => {
    const [storedItems, setStoredItems] = useState(
        JSON.parse(localStorage.getItem("selectedItems")) || {}
    );
    const [name, setName] = useState("");
    const [qty, setQty] = useState("");
    const [table_num, setTableNum] = useState("");
    const [isClicked, setisClicked] = useState();
    const [proof, setProof] = useState();

    useEffect(() => {
        const names = Object.entries(storedItems)
            .map(([id, quantity]) => {
                return quantity !== 0
                    ? AllMenu.find((menu) => menu.id == id).name
                    : null;
            })
            .filter((name) => name !== null);

        setName(names);

        const quan = Object.entries(storedItems)
            .map(([id, quantity]) => {
                return quantity;
            })
            .filter((name) => name !== null);

        setQty(quan);
    }, []);

    const newPrice = (disc_val, curr_price) => {
        const newPrice = curr_price - (curr_price * disc_val) / 100;
        return newPrice;
    };

    const handleQuantityChange = (id, delta) => {
        const newQuantity = storedItems[id] + delta;
        if (newQuantity >= 0) {
            setStoredItems((prevStoredItems) => ({
                ...prevStoredItems,
                [id]: newQuantity,
            }));
        }
    };
    const total_price = Object.entries(storedItems).reduce(
        (total, [id, quantity]) => {
            const menu = AllMenu.find((menu) => menu.id == id);
            if (menu) {
                if(menu.discounted_price) {
                    return total + newPrice(menu.discounted_price, menu.price) * quantity;
                }
                else {
                    return total + menu.price * quantity;

                }
            } else {
                return total;
            }
        },
        0
    );
    const total_price_tax = total_price + total_price * 0.1;
    useEffect(() => {
        localStorage.setItem("selectedItems", JSON.stringify(storedItems));
    }, [storedItems]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("selectedItems", JSON.stringify({}));
        router.post("/checkout", { total_price_tax, name, qty, proof });
    };

    const handleClick = (e) => {
        setisClicked(true);
    };

    const handleFile = (e) => {
        setProof(e.target.files[0]);
    };
    return (
        <>
            <Navbar />
            <div className="pt-32 px-4 md:px-20 flex flex-col md:flex-col lg:flex-row font-nunito">
                <div className="w-full md:w-1/2 mr-0 md:mr-10 mb-8 md:mb-0 lg:w-full">
                    <div className="flex flex-wrap">
                        <MdOutlineShoppingCart className="text-2xl font-bold" />
                        <h1 className="font-bold text-2xl mb-8 ml-2 -mt-1">
                            YOUR CART
                        </h1>
                    </div>
                    <form action="" className="">
                        {Object.entries(storedItems).map(([id, quantity]) =>
                            quantity !== 0 ? (
                                <ul
                                    role="list"
                                    className="-my-6 divide-y divide-gray-200"
                                >
                                    <li key={id} className="flex py-6">
                                        <div className="h-20 w-20 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-md">
                                            <img
                                                src={`${
                                                    AllMenu.find(
                                                        (menu) => menu.id == id
                                                    ).image
                                                }`}
                                                alt="Menu Image"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div className="-mb-2 md:mb-2 font-bold">
                                                <div className="flex justify-between text-gray-900 flex-col md:flex-row">
                                                    <h3>
                                                        <input
                                                            className="border-0 md:text-lg text-md"
                                                            type="text"
                                                            value={
                                                                AllMenu.find(
                                                                    (menu) =>
                                                                        menu.id ==
                                                                        id
                                                                ).name
                                                            }
                                                            name="name"
                                                            disabled
                                                        />
                                                    </h3>
                                                    {AllMenu.find(
                                                        (menu) => menu.id == id
                                                    ) &&
                                                    AllMenu.find(
                                                        (menu) => menu.id == id
                                                    ).discounted_price ? (
                                                        <div className="">
                                                            <input
                                                                className="-mt-3 border-0 md:text-right md:text-lg text-[#42754C]"
                                                                type="text"
                                                                value={(
                                                                    newPrice(
                                                                        AllMenu.find(
                                                                            (
                                                                                menu
                                                                            ) =>
                                                                                menu.id ==
                                                                                id
                                                                        )
                                                                            .discounted_price,
                                                                        AllMenu.find(
                                                                            (
                                                                                menu
                                                                            ) =>
                                                                                menu.id ==
                                                                                id
                                                                        ).price
                                                                    ) * quantity
                                                                ).toLocaleString(
                                                                    "id-ID",
                                                                    {
                                                                        style: "currency",
                                                                        currency:
                                                                            "IDR",
                                                                    }
                                                                )}
                                                                name="price"
                                                                disabled
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="">
                                                            <input
                                                                className="-mt-3 border-0 md:text-right md:text-lg text-[#42754C]"
                                                                type="text"
                                                                value={(
                                                                    AllMenu.find(
                                                                        (
                                                                            menu
                                                                        ) =>
                                                                            menu.id ==
                                                                            id
                                                                    ).price *
                                                                    quantity
                                                                ).toLocaleString(
                                                                    "id-ID",
                                                                    {
                                                                        style: "currency",
                                                                        currency:
                                                                            "IDR",
                                                                    }
                                                                )}
                                                                name="price"
                                                                disabled
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="hidden md:block md:text-sm md:ml-5 md:mb-2 md:font-thin">
                                                {" "}
                                                Quantity{" "}
                                            </p>
                                            <div className="ml-32 md:ml-4 -mb-4 md:mb-0 flex items-center p-1 border rounded-md border-slate-300 w-min h-6 md:h-8">
                                                <button
                                                    className="bg-transparent px-3 py-1"
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            id,
                                                            -1
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <input
                                                    className="border-none w-10 bg-transparent text-center px-3 py-1"
                                                    type="text"
                                                    value={quantity}
                                                    readOnly
                                                />
                                                <button
                                                    className="bg-transparent px-3 py-1"
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            id,
                                                            1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="border-t-8 border-gray-300 h-6"></div>
                                </ul>
                            ) : null
                        )}
                        <br />
                    </form>
                </div>
                <div className="p-4 md:p-8 px-8 md:px-12 w-full md:w-full lg:w-3/5 shadow-lg">
                    <div className="flex justify-between mb-4">
                        <p className="font-bold text-lg">The Total Amount: </p>
                    </div>
                    <div className="flex flex-col mt-8 mb-4">
                        <div className="flex justify-between mb-4">
                            <p className="">Total Price:</p>
                            <p className="">
                                {total_price.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Tax:</p>
                            <p className="">
                                {(total_price * 0.1).toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 h-6"></div>
                    <div className="flex justify-between mb-10 font-semibold">
                        <p className="">Total Price include Tax:</p>
                        <p className="">
                            {total_price_tax.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                        </p>
                    </div>
                    <div className="drop-shadow-sm">
                        <button
                            type="submit"
                            onClick={(e) => handleClick(e)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 w-full"
                        >
                            Checkout
                        </button>
                        <a
                            href="/"
                            className="text-black px-2 py-2 rounded-3xl w-full flex mt-4 font-bold hover:text-gray-800"
                        >
                            <TiArrowBackOutline className="text-2xl font-thin mr-2 -mt-0.5" />
                            Back to Shopping
                        </a>
                    </div>
                    {isClicked == true ? (
                        <div
                            class="fixed z-10 inset-0 overflow-y-auto"
                            id="my-modal"
                        >
                            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    class="fixed inset-0 transition-opacity"
                                    aria-hidden="true"
                                >
                                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>
                                <span
                                    class="hidden sm:inline-block sm:align-middle sm:h-screen"
                                    aria-hidden="true"
                                >
                                    &#8203;
                                </span>
                                <div
                                    class="inline-block relative align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <button
                                        onClick={(e) => setisClicked(false)}
                                        className="absolute right-5 top-1 text-xl font-extrabold text-red-500 hover:text-red-900 transition duration-500"
                                    >
                                        x
                                    </button>
                                    <div>
                                        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-10 w-10 text-green-600"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.5"
                                                    fill-rule="evenodd"
                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="mt-3 text-center sm:mt-5">
                                            <h3
                                                class="text-2xl leading-6 font-bold text-gray-900"
                                                id="modal-headline"
                                            >
                                                Proceed to Payment?
                                            </h3>
                                        </div>
                                    </div>
                                    <form
                                        onSubmit={handleSubmit}
                                        method="post"
                                        enctype="multipart/form-data"
                                        className="mt-5 sm:mt-6 flex justify-center items-center"
                                    >
                                        <div className="w-5/6">
                                            <div className="flex justify-center items-center">
                                                <input
                                                    onChange={handleFile}
                                                    type="file"
                                                    name="img"
                                                    accept=".jpeg, .jpg, .png"
                                                    id=""
                                                    className="text-sm text-stone-500
                                                    file:mr-5 file:py-1 file:px-3 file:border-[1px]
                                                    file:text-xs file:font-medium
                                                    file:bg-stone-50 file:text-stone-700
                                                    file:rounded-xl
                                                    hover:file:cursor-pointer hover:file:bg-blue-50
                                                    hover:file:text-blue-700 mb-5"
                                                />
                                            </div>
                                            {proof ? (
                                                <button
                                                    id="pay-button"
                                                    type="submit"
                                                    class="w-full inline-flex items-center justify-center py-2 px-4 bg-yellow-500 hover:bg-amber-400 focus:bg-amber-400 text-white font-semibold rounded-lg border border-transparent shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                                                >
                                                    Pay
                                                </button>
                                            ) : (
                                                <button
                                                    disabled
                                                    id="pay-button"
                                                    type="submit"
                                                    class="w-full inline-flex items-center justify-center py-2 px-4 bg-gray-400 text-white font-semibold rounded-lg border border-transparent shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                                                >
                                                    Pay
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <script type="text/javascript"></script>
        </>
    );
};

export default Cart;
