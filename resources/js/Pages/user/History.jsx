import Navbar from '@/Components/Navbar';
import { router } from "@inertiajs/react";
import { useState } from "react";
import { MdOutlineHistoryEdu } from "react-icons/md";

const History = ({ user, order }) => {
    const [order_id, setOrderId] = useState('');
    const [total_price, setTotalPrice] = useState('');

    localStorage.removeItem('selectedItems');
    
    const handlePick = (index, total) => {
        setOrderId(index);
        setTotalPrice(total);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        router.post("/payment", {order_id, total_price})
    }
    return (
        <>
        <Navbar />
        <div className="absolute right-0 overflow-hidden md:px-12 z-[-1]">
            <div className="bg-yellow-500 md:p-72 rounded-bl-[100px] md:-skew-x-[11deg] md:translate-x-20 md:scale-x-110"></div>
        </div>
        <div className="pt-32 px-28 flex font-nunito">
            <div className="w-full">
                <div className="flex flex-wrap">
                    <MdOutlineHistoryEdu className="text-2xl font-bold"/>
                    <h1 className="font-bold text-2xl mb-8 ml-2 -mt-1">YOUR ORDER HISTORY</h1>
                </div>
                {order.map((orderItem, key) => (
                    <form key={key} id={key} className="bg-white shadow-xl rounded-md p-4 mb-6" onSubmit={handleSubmit}>
                        
                        <div className="grid grid-cols-4 gap-4 mb-4 w-full">
                            <p className="text-xl font-bold">Order #{orderItem.id} | Table Number: 4</p>
                        </div>

                        <div className="mb-4">
                            <div className="grid grid-cols-3">
                                <p className="text-md text-gray-700 font-thin">Amount Total</p>
                                <p className="text-md text-gray-700 font-thin">Status</p>
                                <p className="text-md text-gray-700 font-thin">Order Date</p>
                            </div>
                            <div className="grid grid-cols-3">
                            <p className="text-lg font-semibold">Rp. {orderItem.total_price}</p>
                            <p className={`text-lg font-semibold ${orderItem.status === 'Unpaid' ? 'text-red-500' : 'text-green-500'}`}>{orderItem.status}</p>
                            <p className="text-lg font-semibold">23 March 2023</p>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <div className="grid grid-cols-1">
                                <p className="text-md text-gray-700 font-thin">Item Ordered: 4</p>
                            </div>
                            <div className="grid grid-cols-1">
                                <p className="text-lg font-semibold">Chicken, Steak, Soup, Honey Muffin</p>
                            </div>
                        </div>
                        <button type="submit" onClick={() => handlePick(orderItem.order_id, orderItem.total_price)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Proceed to Payment</button>
                    </form>
                ))}
            </div>
        </div>

        </>
    );
}

export default History;
