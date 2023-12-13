import React, {useState} from "react";
import { Card, ListGroup } from "flowbite-react";
import { Accordion,Button } from "flowbite-react";
import AccordionWidget from "./AccordionWidget";


const ProductsCard = () => {
    const [data, setData] = useState(null);
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="h-96">
                <Card className="h-96 "> 
                <div className="container">
                    <div className="flex items-center">
                        <div className="flex rounded-[10px] h-[45px] ">
                            <div className=" border px-2 py-2 h-full w-full rounded-l-[10px]">
                                <input
                                type="text"
                                className=" border-none focus:border-none h-[25px] focus:ring-0 focus:after:outline-none text-base bg-white"
                                placeholder="Search Zephyr..."
                                />
                            </div>
                            <button className="px-4 rounded-r-[10px] border border-primary font-semibold text-white bg-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container rounded h-72 flex justify-center">
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