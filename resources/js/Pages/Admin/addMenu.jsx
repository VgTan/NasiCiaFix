import React, { useState } from "react";
import NavbarAdmin from "@/Components/NavbarAdmin";

const addMenu = ({ menus }) => {
    const [add, setAdd] = useState(false);
    const [newCat, setNewCat] = useState();
    const [cat, setCat] = useState();
    const [isNewCat, setIsNewCat] = useState(false);

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();

    const handleFile = (e) => {
        setImg(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
        if (e.target.value == "newCategory") {
            setIsNewCat(true);
        } else {
            setIsNewCat(false);
            setCat(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault;
    };
    return (
        <div>
            <NavbarAdmin />
            <div className="flex justify-center">
                {add ? (
                    <div className="w-11/12">
                        <button onClick={(e) => setAdd(false)}>
                            Edit Menu
                        </button>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-2"
                        >
                            <span>Menu Name: </span>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onchange={(e) => setName(e.target.value)}
                            />
                            <span>Price: </span>
                            <input
                                type="number"
                                min="0"
                                value={price}
                                onchange={(e) => setPrice(e.target.value)}
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
                            <span>Image</span>
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
                            <button type="submit" className="col-span-2">
                                Add
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="w-11/12">
                        <button onClick={(e) => setAdd(true)}>Add Menu</button>
                        {menus.map((menu) => (
                            <div className=""></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

addMenu.propTypes = {};

export default addMenu;
