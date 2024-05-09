import { router } from "@inertiajs/react";
import { useState } from "react";
import { MdOutlineHistoryEdu } from "react-icons/md";
import NavbarAdmin from "@/Components/NavbarAdmin";

const Dashboard = ({ order, od }) => {
    const [update_prog, setUpdateProg] = useState("");
    const [id, setId] = useState("");
    const [Proof, setSelectedProof] = useState();

    const handleSelected = (selected_id) => {
        setId(selected_id);
        console.log(id);
    };
    const handleSubmit = async (e) => {
        router.post("/admin-handle", { update_prog, id });
        setProof(false);
    };
    const handleClick = (orderId) => {
        setSelectedProof(orderId);
    };
    return (
        <>
            <NavbarAdmin></NavbarAdmin>
            <div className="font-nunito md:m-20 m-5 md:mt-0 mt-0">
                <div className="flex flex-wrap -mb-4 md:mb-0">
                    <MdOutlineHistoryEdu className="text-xl md:text-2xl font-bold" />
                    <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-8 ml-2 -mt-1">
                        CUSTOMER ORDERS
                    </h1>
                </div>
                {order
                    .filter(
                        (orders) =>
                            orders.status == "Paid" && orders.progress != "Done"
                    )
                    .map((items, key) => (
                        <form
                            onSubmit={handleSubmit}
                            key={key}
                            className="bg-white border border-zinc-200 shadow-xl rounded-md p-4 mb-6"
                        >
                            <div className="grid md:grid-cols-2 mb-4">
                                <div className="space-y-2">
                                    <h1 className="text-base md:text-xl lg:text-2xl font-bold leading-7 lg:leading-9 text-gray-800">
                                        Order #{items.id} | Order Number:{" "}
                                        {items.order_number}
                                    </h1>
                                    <p className="text-sm font-bold leading-6 text-gray-600">
                                        Customer Name: {items.user_name}
                                    </p>
                                </div>

                                <div className="flex md:place-self-end mr-10 md:mb-6 mt-3">
                                    <p className="text-right text-base md:text-xl font-bold leading-6 text-[#42754C] mr-3 mt-1">
                                        Status:
                                    </p>
                                    <select
                                        name={key}
                                        id={key}
                                        onChange={(e) =>
                                            setUpdateProg(e.target.value)
                                        }
                                        className="border border-gray-300 rounded-md pl-4 pr-10 py-1 h-8 md:h"
                                    >
                                        {items.progress == "Preparing" ? (
                                            <>
                                                <option
                                                    value="Preparing"
                                                    className=""
                                                >
                                                    Preparing
                                                </option>
                                                <option value="Ready">
                                                    Ready
                                                </option>
                                            </>
                                        ) : items.progress == "Ready" ? (
                                            <>
                                                <option
                                                    value="Ready"
                                                    className=""
                                                >
                                                    Ready
                                                </option>
                                                <option value="Preparing">
                                                    Preparing
                                                </option>
                                            </>
                                        ) : null}
                                        {Proof == items.id ? (
                                            <option value="Done">Done</option>
                                        ) : null}
                                    </select>
                                </div>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-5 gap-4 mb-2">
                                    <p className="font-bold text-sm md:text-lg">
                                        Item
                                    </p>
                                    <p className="font-bold text-sm md:text-lg">
                                        Unit Price
                                    </p>
                                    <p className="font-bold text-sm md:text-lg">
                                        Qty
                                    </p>
                                    <p className="font-bold text-sm md:text-lg">
                                        SubTotal
                                    </p>
                                    <p className="font-bold text-sm md:text-lg">
                                        Transaction Proof
                                    </p>
                                </div>
                                {od
                                    .filter(
                                        (details) =>
                                            details.order_id == items.id
                                    )
                                    .map((order_details, index) => (
                                        <div
                                            className="grid grid-cols-5 gap-4"
                                            key={index}
                                        >
                                            <div className="w-3/4 overflow-x-auto">
                                                <p className="font-semibold whitespace-nowrap text-sm md:text-base">
                                                    {order_details.menu_name}
                                                </p>
                                            </div>
                                            <p className="font-semibold text-sm md:text-base">
                                                {order_details.price}
                                            </p>
                                            <p className="border border-slate-200 font-semibold text-sm md:text-base w-min p-1 px-3">
                                                {order_details.qty}
                                            </p>
                                            <p className="font-semibold text-sm md:text-base">
                                                {order_details.qty *
                                                    order_details.price}
                                            </p>
                                            <a
                                                onClick={(e) =>
                                                    handleClick(items.id)
                                                }
                                                href={items.image}
                                                target="_blank"
                                            >
                                                <p className="underline font-bold text-blue-400">
                                                    Bukti
                                                </p>
                                            </a>
                                        </div>
                                    ))}

                                <p className="text-lg font-bold mt-4">
                                    Total Price:{" "}
                                    <span className="text-[#42754C]">
                                        {od
                                            .filter(
                                                (details) =>
                                                    details.order_id == items.id
                                            )
                                            .reduce(
                                                (total, order_details) =>
                                                    total +
                                                    order_details.qty *
                                                        order_details.price,
                                                0
                                            )}
                                    </span>
                                </p>
                            </div>
                            <button
                                type="submit"
                                onClick={() => handleSelected(items.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    ))}
            </div>
        </>
    );
};

export default Dashboard;
