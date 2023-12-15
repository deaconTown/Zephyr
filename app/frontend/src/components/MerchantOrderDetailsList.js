import EmptyPlanet from '../assets/empty-planet.png'
import DoubleWhopper from '../assets/double-whopper.png'
import OrderDetail from './OrderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'flowbite-react';

function MerchantOrderDetailsList(){
    return (
        <div className="[ orders-list ][ ml-[30px] ][ flex flex-col ][ border-2 w-[700px] h-[800px] ][ rounded-[10px] ][ p-[20px] ]">
             <div className="[ text-[28px] font-[Lobster] text-[#404040] ]">Customer's Order</div>
             <div className="[ order-details-section ][ flex flex-col ]">
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
                        <div className="[ order-status ][ mx-auto mt-[20px] ]">
                            <div className="flex items-center mt-2 flex-col">
                                <div className=" flex flex-row">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#0BDA51] relative">
                                        <div className="absolute h-[8px] w-[100px] bg-[#A8A8A8] top-1/2 left-full transform -translate-y-1/2"></div>
                                    </div>
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#A8A8A8] relative ml-[100px]">
                                        <div className="absolute h-[8px] w-[100px] bg-[#A8A8A8] top-1/2 left-full transform -translate-y-1/2"></div>
                                    </div>
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#A8A8A8] relative ml-[100px]">
                                    </div>
                                </div>
                                <div className="[ flex flex-row ][ w-auto mt-[20px] ]">
                                    <FontAwesomeIcon className="w-[30px] h-[30px]" icon={faMobile} style={{color: "#0bda51",}} />
                                    <p className="[ text-[#0BDA51] font-bold text-[20px] font-[Roboto] ][ ml-2 ]">Order Placed</p>
                                </div>
                            </div>   
                        </div>
                        <Button color='' className="[ login-btn ][ w-[150px] h-[40px] ][ mt-[20px] ][ bg-primary text-white ]">Update Status</Button>
                    </div>
        </div>
    )
}

export default MerchantOrderDetailsList