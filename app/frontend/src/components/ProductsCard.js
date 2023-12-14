import React, {useState} from "react";
import { Card, ListGroup } from "flowbite-react";
import AccordionWidget from "./AccordionWidget";


const ProductsCard = () => {
    const [data, setData] = useState(null);
    return (
        <div className="block w-screen space-y-2 lg:grid grid-cols-3 lg:gap-4 lg:space-y-0">
            <div className="h-24 lg:h-96">
                <Card className="h-24 p-0 lg:h-96"> 
                <div>
                    <div>
                        <div className="flex rounded-[10px] h-full w-full justify-center">
                            <div className="border px-2 py-2 rounded-l-[10px]">
                                <input
                                type="text"
                                className=" border-none focus:border-none h-[25px] focus:ring-0 focus:after:outline-none text-base bg-white"
                                placeholder="Search Zephyr..."
                                />
                            </div>
                            <button className=" px-2 lg:px-4 rounded-r-[10px] border border-primary font-semibold text-white bg-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="invisible hidden rounded h-72 justify-center lg:visible ">
                    <ListGroup className="w-full py-2 overflow-y-auto bg-secondary p-2 ">
                        <ListGroup.Item href="#" className="bg-white enabled:focus:ring-none ring-none focus:bg-primary rounded "> 
                            search content area  
                        </ListGroup.Item>
                    </ListGroup>                   
                </div>
                </Card>
            </div>
            <div className="col-span-2 h-96">
                <Card className="max-w-full h-full overflow-y-auto ">
                <AccordionWidget title='Burger King' description='taste rules your way'/>
                <AccordionWidget title='Popeyes'/>
                <AccordionWidget title='Wendys'/>
                </Card>
               
            </div>

        </div>);
}

export default ProductsCard;