import React, { useState } from "react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import { router } from "@inertiajs/react";

const addMenu = ({ menus }) => {
    const [add, setAdd] = useState(false);
    const [disc, setDiscount] = useState();
    const [newCat, setNewCat] = useState();
    const [cat, setCat] = useState();
    const [isNewCat, setIsNewCat] = useState(false);
    const [selectedMenus, setSelectedMenus] = useState([]);

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();
    const [stock, setStock] = useState();
    const [img, setImg] = useState();
    const [addSuccess, setAddSuccess] = useState(false);
    const [discSuccess, setDiscSuccess] = useState(false);

    const handleFile = (e) => {
        setImg(e.target.files[0]);
    };
    const handleClick = (menuId) => {
        setSelectedMenus((prevSelectedMenus) => {
            if (prevSelectedMenus.includes(menuId)) {
                return prevSelectedMenus.filter((id) => id != menuId);
            } else {
                return [...prevSelectedMenus, menuId];
            }
        });
    };
    const handleCategoryChange = (e) => {
        if (e.target.value == "newCategory") {
            setIsNewCat(true);
            setCat(null);
        } else {
            setIsNewCat(false);
            setCat(e.target.value);
        }
    };

    const newPrice = (disc_val, curr_price) => {
        const newPrice = curr_price - (curr_price * disc_val) / 100;
        return newPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            router.post(
                "/add-menu",
                {
                    name,
                    price,
                    img,
                    cat,
                    newCat,
                    stock,
                    desc,
                },
                {
                    onSuccess: () => {
                        setAddSuccess(true);
                    },
                }
            );
        } catch (error) {
            console.error("Error adding menu:", error);
        }
    };

    const handleSubmitDisc = async (e) => {
        e.preventDefault();
        try {
            router.post(
                "/discount",
                {
                    disc,
                    selectedMenus,
                },
                {
                    onSuccess: () => {
                        setDiscSuccess(true);
                    },
                }
            );
        } catch (error) {
            console.error("Error adding menu:", error);
        }
    };
    return (
        <div>
            <NavbarAdmin />
            <div className="flex justify-center">
                {add ? (
                    <div className="w-11/12">
                        <div className="flex justify-center mb-10">
                            <button
                                className="text-2xl font-bold bg-orange-300 p-2 rounded-lg text-white"
                                onClick={(e) => setAdd(false)}
                            >
                                Set Discount
                            </button>
                        </div>
                        {addSuccess ? (
                            <p className="text-green-500 font-bold">
                                Menu Added
                            </p>
                        ) : null}
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-2"
                            method="post"
                            enctype="multipart/form-data"
                        >
                            <span>Menu Name: </span>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span>Price: </span>
                            <input
                                type="number"
                                min="0"
                                name="price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <span>Category: </span>
                            <div className="flex w-full">
                                <select
                                    className="w-1/4"
                                    name="category"
                                    id=""
                                    onChange={handleCategoryChange}
                                >
                                    <option value="">Choose</option>
                                    <option value="newCategory">
                                        New Category
                                    </option>
                                    {menus
                                        .map((menu) => menu.category)
                                        .filter(
                                            (category, index, self) =>
                                                self.indexOf(category) === index
                                        )
                                        .map((category, index) => (
                                            <>
                                                <option value={category}>
                                                    {category}
                                                </option>
                                            </>
                                        ))}
                                </select>
                                {isNewCat ? (
                                    <input
                                        className="w-3/4"
                                        type="text"
                                        value={newCat}
                                        name="newCat"
                                        onChange={(e) =>
                                            setNewCat(e.target.value)
                                        }
                                    />
                                ) : null}
                            </div>
                            <span>Stock: </span>
                            <input
                                type="number"
                                min="0"
                                name="stock"
                                onChange={(e) => setStock(e.target.value)}
                            />
                            <span>Description: </span>
                            <textarea
                                type="text"
                                min="0"
                                name="desc"
                                onChange={(e) => setDesc(e.target.value)}
                            />
                            <span>Image</span>
                            <input
                                onChange={handleFile}
                                type="file"
                                name="img"
                                accept=".jpeg, .jpg, .png"
                                className="text-sm text-stone-500
                                                    file:mr-5 file:py-1 file:px-3 file:border-[1px]
                                                    file:text-xs file:font-medium
                                                    file:bg-stone-50 file:text-stone-700
                                                    file:rounded-xl
                                                    hover:file:cursor-pointer hover:file:bg-blue-50
                                                    hover:file:text-blue-700 mb-5"
                            />
                            <button type="submit" className="col-span-2">
                                Add
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="w-11/12">
                        <div className="flex justify-center mb-10">
                            <button
                                className="text-2xl font-bold bg-orange-300 p-2 rounded-lg text-white"
                                onClick={(e) => setAdd(true)}
                            >
                                Add Menu
                            </button>
                        </div>
                        <div className="sticky top-5 right-0">
                            <form
                                method="post"
                                onSubmit={handleSubmitDisc}
                                className="flex gap-5 justify-center"
                            >
                                <div className="">
                                    <span className="font-bold text-3xl">
                                        Discount:{" "}
                                    </span>
                                    <input
                                        className="font-bold text-xl"
                                        type="number"
                                        max="100"
                                        min="0"
                                        name="disc"
                                        onChange={(e) =>
                                            setDiscount(e.target.value)
                                        }
                                    />
                                    <span className="font-extrabold text-3xl">
                                        %
                                    </span>
                                    <br />
                                    <div className="flex justify-center">
                                        <button
                                            className="text-2xl font-bold text-[#42754C] mb-10"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="grid grid-cols-4 px-3 py-2 text-2xl font-bold border-b-[1px] border-black text-center">
                            <p>Menu Name</p>
                            <p>Normal Price</p>
                            <p>New Price</p>
                            <p>Select</p>
                        </div>
                        {menus.map((menu) => (
                            <div className="grid grid-cols-4 p-3 border-b-[1px] border-black items-center">
                                <p className="text-xl">{menu.name}</p>
                                <p className="text-center font-bold space-x-1">
                                    {menu.price.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </p>
                                {menu.discounted_price ? (
                                    <p className="text-[#42754C] font-bold space-x-1 text-center">
                                        {newPrice(
                                            menu.discounted_price,
                                            menu.price
                                        )}
                                    </p>
                                ) : (
                                    <p className="text-center font-bold">-</p>
                                )}
                                <div className="flex justify-center items-center">
                                    <input
                                        className="p-3"
                                        type="checkbox"
                                        name="menus"
                                        onClick={(e) => handleClick(menu.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

addMenu.propTypes = {};

export default addMenu;
