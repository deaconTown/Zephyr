import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faBell, faCheck, faCircleCheck, faMobile } from '@fortawesome/free-solid-svg-icons';

function OrdersHistory(){
    return(
        <div id="orders-history" className="[ orders-history ][ border-2 border-solid ][ rounded-[10px] ][ h-[750px] w-[400px] ][ px-[20px] py-[30px] ]">
            <div className="[ text-center ][ text-[28px] font-[Lobster] text-[#404040] ]">Orders History</div>
            <div className="[ orders-container ][ h-[620px] ][ overflow-y-scroll ][ mt-[20px] ]">
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ rounded-[10px] ][ bg-[#F0F0F0] ][ flex justify-between ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #111
                    </div>
                    <div className="[ order-num ][ font-[Pacifico]  text-[18px] ]">
                        $2,000.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        3 items
                    </div>
                </div>
                <div className="[ my-auto ]">
                    <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faMobile} style={{color: "#0bda51",}} />
                        <p className="[ text-[#0BDA51] font-bold font-[Roboto] ][ ml-2 ]">Order Placed</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-4 h-4 rounded-full bg-[#0BDA51] relative">
                            <div className="absolute h-1 w-[30px] bg-[#A8A8A8] top-1/2 left-full transform -translate-y-1/2"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#A8A8A8] relative ml-[30px]">
                            <div className="absolute h-1 w-[30px] bg-[#A8A8A8] top-1/2 left-full transform -translate-y-1/2"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#A8A8A8] relative ml-[30px]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #222
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $1,500.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        2 items
                    </div>
                </div>
                <div className="[ my-auto ]"> 
                    <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faBell} style={{color: "#0bda51",}} />
                        <p className="[ text-[#0BDA51] font-bold font-[Roboto] ][ ml-2 ]">In Progress</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-4 h-4 rounded-full bg-[#0BDA51] relative">
                            <div className="absolute h-1 w-[30px] bg-[#0BDA51] top-1/2 left-full transform -translate-y-1/2"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#0BDA51] relative ml-[30px]">
                            <div className="absolute h-1 w-[30px] bg-[#A8A8A8] top-1/2 left-full transform -translate-y-1/2"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#A8A8A8] relative ml-[30px]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #333
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $5,000.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        5 items
                    </div>
                </div>
                <div className="[ my-auto ]">
                    <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCheck} style={{color: "#0bda51",}} />
                        <p className="[ text-[#0BDA51] font-bold font-[Roboto] ][ ml-2 ]">Ready</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-4 h-4 rounded-full bg-[#0BDA51] relative">
                            <div className="absolute h-1 w-[30px] bg-[#0BDA51] top-1/2 left-full transform -translate-y-1/2"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#0BDA51] relative ml-[30px]">
                            <div className="absolute h-1 w-[30px] bg-[#0BDA51] top-1/2 left-full transform -translate-y-1/2"></div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#0BDA51] relative ml-[30px]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #444
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $10,000.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        5 items
                    </div>
                </div>
                <div className="[ my-auto ]"> 
                    <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCircleCheck} style={{color: "#0BDA51",}} />
                        <p className="[ text-[#0BDA51] font-bold font-[Roboto] ][ ml-2 ]">Received</p>
                    </div>
                    
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #555
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $7,500.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        5 items
                    </div>
                </div>
                <div className="[ my-auto ]"> 
                <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faBan} style={{color: "#C81E1E",}} />
                        <p className="[ text-red-700 font-bold font-[Roboto] ][ ml-2 ]">Cancelled</p>
                    </div>
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #555
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $7,500.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        5 items
                    </div>
                </div>
                <div className="[ my-auto ]"> 
                <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faBan} style={{color: "#C81E1E",}} />
                        <p className="[ text-red-700 font-bold font-[Roboto] ][ ml-2 ]">Cancelled</p>
                    </div>
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #555
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $7,500.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        5 items
                    </div>
                </div>
                <div className="[ my-auto ]"> 
                <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faBan} style={{color: "#C81E1E",}} />
                        <p className="[ text-red-700 font-bold font-[Roboto] ][ ml-2 ]">Cancelled</p>
                    </div>
                </div>
            </div>
            <div className="[ order ][ border-b ][ w-full h-[100px] ][ flex justify-between ][ mt-[5px] ]">
                <div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        Order #555
                    </div>
                    <div className="[ order-num ][ font-[Pacifico] text-[18px] ]">
                        $7,500.00
                    </div>
                    <div className="[ order-num ][ font-[Roboto] text-[14px] text-[#A8A8A8] ]">
                        5 items
                    </div>
                </div>
                <div className="[ my-auto ]"> 
                <div className="[ flex flex-row ][ w-[130px] ]">
                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faBan} style={{color: "#C81E1E",}} />
                        <p className="[ text-red-700 font-bold font-[Roboto] ][ ml-2 ]">Cancelled</p>
                    </div>
                </div>
            </div>

            </div> 
        </div>
    );
}

export default OrdersHistory