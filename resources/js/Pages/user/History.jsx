import { router } from "@inertiajs/react";
import { useState } from "react";


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
        <div className="">
            {order.map((orderItem, key) => (
                <form id={key} className="" onSubmit={handleSubmit}>
                    <p>{orderItem.total_price}</p>
                    {orderItem.status}
                    <button type="submit" onClick={() => handlePick(orderItem.order_id, orderItem.total_price)}>Proceed</button>
                </form>
            ))}
        </div>
    );
}

export default History;
