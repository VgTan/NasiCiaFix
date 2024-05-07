import Navbar from '@/Components/Navbar';
import { router } from "@inertiajs/react";
import { useState } from "react";
import { MdOutlineHistoryEdu } from "react-icons/md";

const History = ({ user, order, od, fail}) => {
    const [order_id, setOrderId] = useState('');
    const [total_price, setTotalPrice] = useState('');
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
        <div className="pt-16 md:pt-32 px-5 md:px-28 flex font-nunito mb-10">
            <div className="w-full">
                <div className="flex justify-center -mb-4 md:mb-0">
                    <a href="/logout" className="font-bold text-red-500 text-xl md:text-2xl mb-4 md:mb-8 ml-2 -mt-1">LOGOUT</a>
                </div>
                <div className="flex flex-wrap -mb-4 md:mb-0">
                    <MdOutlineHistoryEdu className="text-xl md:text-2xl font-bold"/>
                    <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-8 ml-2 -mt-1">YOUR ORDER HISTORY</h1>
                </div>
                <div className="flex justify-center -mb-4 md:mb-0">
                    {fail && <div className="font-bold text-xl md:text-2xl mb-4 md:mb-8 ml-2 -mt-1 text-red-500 opacity-75">Not Enough Stock</div>}
                </div>
                {order.map((orderItem, key) => (
                    <form key={key} id={key} className="bg-white shadow-xl rounded-md p-4 md:p-8 mb-6" onSubmit={handleSubmit}>
                        
                        <div className="grid mb-4 w-full">
                            <p className="text-base md:text-xl font-bold">Order #{orderItem.id} | Table Number: {orderItem.table_number}</p>
                            <p className={`text-base md:text-xl font-bold ${orderItem.progress == 'Waiting' ? 'text-orange-500' : orderItem.progress == 'Preparing' ? 'text-black' : 'text-green-500'}`}>{orderItem.progress}</p>
                        </div>

                        <div className="mb-4">
                            <div className="grid grid-cols-3">
                                <p className="text-sm md:text-md text-gray-700 font-thin">Amount Total</p>
                                <p className="text-sm md:text-md text-gray-700 font-thin">Status</p>
                                <p className="text-sm md:text-md text-gray-700 font-thin col-span-1">Order Date</p>
                            </div>
                            <div className="grid grid-cols-3">
                                <p className="text-sm md:text-lg font-semibold">{(orderItem.total_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                <p className={`text-sm md:text-lg font-semibold ${orderItem.status === 'Unpaid' ? 'text-red-500' : 'text-green-500'}`}>{orderItem.status}</p>
                                <p className="text-sm md:text-lg font-semibold">23 March 2023</p>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <div className="grid grid-cols-1">
                                <p className="text-sm md:text-md text-gray-700 font-thin">Item Ordered: 
                                {od.filter(details => details.order_id == orderItem.id).length}</p>
                            </div>
                            <div className="grid grid-cols-1">
                            {od.filter(details => details.order_id == orderItem.id).map((details, key) => (
                                <p key={key} className="text-sm md:text-lg font-semibold">{details.menu_name}</p>
                            ))}
                            </div>
                        </div>
                        {orderItem.status == 'Unpaid' && (
                            <button type="submit" onClick={() => handlePick(orderItem.order_id, orderItem.total_price)} className="mt-0 md:mt-4 md:px-4 md:py-2 text-base px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Proceed to Payment</button>
                        )}
                    </form>
                ))}
            </div>
        </div>

        </>
    );
}

export default History;
