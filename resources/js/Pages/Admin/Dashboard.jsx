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
                <form onSubmit={handleSubmit}>
                <div className="">{items.id}</div>
                <div className="">{items.user_name}</div>
                <div className="">{items.status}</div>
                <div className="">Progress: 
                {items.progress != 'Done' ? (
                <select name="" id="" onChange={(e) => setUpdateProg(e.target.value)} value={update_prog}>

                        <option className="">{items.progress}</option>
                        <option className="">Done</option>
                   
                </select>
                ) : (
                    <p>Done</p>
                )}
                </div>
                <div className="">Table Number: {items.table_number}</div>
                <div className="">Order Items: 
                    {od.filter(details => details.order_id == items.id).map((order_details, key) => (
                        <>
                        <div className="flex gap-2">
                            <p>{order_details.menu_name}</p>
                            <p className="">quantity {order_details.qty}</p>
                        </div>
                        </>
                    ))}
                </div>
                <button>Submit</button>
                </form>
            ))}        
        </div>
       
        </>
    )
}

export default Dashboard;