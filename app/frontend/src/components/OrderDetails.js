import EmptyPlanet from '../assets/empty-planet.png'
import DoubleWhopper from '../assets/double-whopper.png'
import OrderDetail from './OrderDetail';

function OrderDetails({order}){
    order = ""
    return(
        <div className="[ order-details ][ border-2 border-solid ][ rounded-[10px] ][ flex flex-col ][ h-[775px] w-[800px] phone:w-[340px] ][ px-[20px] py-[30px] ][ ml-[50px] phone:mx-auto phone:mt-[20px] ]">
            <div className="[ text-[28px] font-[Lobster] text-[#404040] ]">Order Details</div>
            {
                order === "empty" ? (
                    <div className="[ no-orders-section ][[ my-auto ]">
                        <div className="[ text-center ][ text-[28px] font-[Lobster] text-[#404040]  ]">No Orders Selected</div>
                        <img className="[ mx-auto mt-[40px] phone:mt-[10px] ][ w-[400px] h-[400px] ][ phone:w-[300px] phone:h-[300px] ]" src={EmptyPlanet} alt="Empty Planet" />
                    </div>
                ):(
                    <div className="[ order-details-section ]">
                         <div className="[ order-details-container ][ h-[520px] ][ py-[20px] pr-[15px] phone:pr-[5px] ][ overflow-y-scroll ]">
                            < OrderDetail 
                                img={DoubleWhopper} 
                                name="Double Whopper" 
                                quantity={2} 
                                merchant="Burger King"
                                description="Two flame-grilled beef patties with veggies on a bun" />
                            < OrderDetail 
                                img={DoubleWhopper} 
                                name="Double Whopper" 
                                quantity={2} 
                                merchant="Burger King"
                                description="Two flame-grilled beef patties with veggies on a bun" />
                            < OrderDetail 
                                img={DoubleWhopper} 
                                name="Double Whopper" 
                                quantity={2} 
                                merchant="Burger King"
                                description="Two flame-grilled beef patties with veggies on a bun" />
                            < OrderDetail 
                                img={DoubleWhopper} 
                                name="Double Whopper" 
                                quantity={2} 
                                merchant="Burger King"
                                description="Two flame-grilled beef patties with veggies on a bun" />
                            
                        </div>
                        <div className="[ order-total ][ flex flex-col ][ justify-between ][ mt-[40px] ][ border rounded-[10px] ][ px-[20px] ]">
                            <div className="[ total-section ][ flex flex-row ][ justify-between ][ mt-[5px] ][ border-b ]">
                                <p className="[ total-label ][ font-[Lobster] text-[24px] phone:text-[18px] text-[#404040] ]">Total</p>
                                <p className="[ total-txt ][ font-[Lobster] text-[24px] phone:text-[18px] text-[#404040] ]">$6,700.00</p>
                            </div>
                            <div className="[ total-section ][ flex flex-row ][ justify-between ][ mt-[5px] ]">
                                <p className="[ total-label ][ font-[Roboto] text-[16px] phone:text-[14px] text-[#A8A8A8] ]">Subtotal</p>
                                <p className="[ total-txt ][ font-[Roboto] text-[16px] phone:text-[14px] text-[#A8A8A8] ]">$6,000.00</p>
                            </div>
                            <div className="[ total-section ][ flex flex-row ][ justify-between ]">
                                <p className="[ total-label ][ font-[Roboto] text-[16px] phone:text-[14px] text-[#A8A8A8] ]">Tax</p>
                                <p className="[ total-txt ][ font-[Roboto] text-[16px] phone:text-[14px] text-[#A8A8A8] ]">$500.00</p>
                            </div>
                            <div className="[ total-section ][ flex flex-row ][ justify-between ]">
                                <p className="[ total-label ][ font-[Roboto] text-[16px] phone:text-[14px] text-[#A8A8A8] ]">Fee</p>
                                <p className="[ total-txt ][ font-[Roboto] text-[16px] phone:text-[14px] text-[#A8A8A8] ]">$200.00</p>
                            </div>
                        </div>
                    </div>
                   
                    
                )
            }
        </div>
    );
}

export default OrderDetails