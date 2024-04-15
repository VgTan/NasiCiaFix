import { router } from "@inertiajs/react";
import { useState } from "react";

const Dashboard = ( {order, od} ) => {
    const [update_prog, setUpdateProg] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        router.post('/admin-handle', {update_prog});
    }
    return (
        <>
        <div className="">
            {order.map((items, key) => (
                <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-md p-4 mb-6">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{items.id} | Table Number: {items.table_number}</h1>
                    <p className="text-base font-medium leading-6 text-gray-600">Customer Name: {items.user_name}</p>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-4 w-full">
                    <div className="">{items.status}</div>
                    <div className="">Progress: 
                    <select name={key} id={key} onChange={(e) => setUpdateProg(e.target.value)}>
                        {items.progress !== 'Done' ? (
                            <>
                                <option value={items.progress} className="">{items.progress}</option>
                                <option value="Done">Done</option>
                            </>
                        ) : (
                            <option value="Done">Done</option>
                        )}
                    </select>
                    </div>
                </div>
                <div className="">
                    {od.filter(details => details.order_id == items.id).map((order_details, key) => (
                        <div className="flex gap-2" key={key}>
                            <p>{order_details.menu_name}</p>
                            <p className="">Quantity: {order_details.qty}</p>
                            <p className="">Unit Price: {order_details.price}</p>
                            <p className="">Total Price: {order_details.qty * order_details.price}</p>
                        </div>
                    ))}
                    {od.filter(details => details.order_id == items.id).reduce((total, order_details) => total + (order_details.qty * order_details.price), 0)}
                </div>
                <button>Submit</button>
                </form>
            ))}        
        </div>
       
        </>
    )
}

export default Dashboard;