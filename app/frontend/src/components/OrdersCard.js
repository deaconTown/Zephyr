import React, { useState } from "react";
import { Button } from "flowbite-react";
import NoOrders from '../assets/no-orders.png'
import OrdersHistory from "./OrdersHistory";
import OrderDetails from "./OrderDetails";

const OrdersCard = () => {
    const [isActive, setActive] = useState("active")
    const [isEmpty, setEmpty] = useState(true)
    const orders = 1
    return(
        <div className="w-full flex flex-col md:px-[40px] ">
            {
                orders === 0 ? (
                    <div className="[ no-orders-section ]">
                        <div className="[ text-center ][ text-[28px] font-[Lobster] text-[#404040]   ]">No Orders History</div>
                            <img className="[ mx-auto mt-[40px] ]" src={NoOrders} />
                        <div className="[ text-center ][ text-[28px] font-[Lobster] text-[#404040] ][ mt-[40px] ]">Reserve Your Space Now</div>
                    </div>

                ): (
                    <div className="[ orders-section ][ flex flex-row  overflow-auto h-30]">
                        <OrdersHistory />
                        <OrderDetails />
                    </div>
                )
            }
        </div>
    );
}

export default OrdersCard;