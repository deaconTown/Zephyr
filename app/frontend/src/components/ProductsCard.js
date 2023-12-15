import React from "react";
import { Card, ListGroup } from "flowbite-react";
import AccordionWidget from "./AccordionWidget";
import useApiCall from './ApiCall';


const ProductsCard = () => {
    //const url = process.env.REACT_APP_BASE_URL;
    const {data, loading, error} = useApiCall(`http://localhost:3001/products/getall`, 'GET');

    if(loading)
        return <p>Loading...</p>;
    if(error)
        return <p>Error: e{error.message}</p>

    return (
        <div className="block w-screen space-y-2 lg:grid grid-cols-3 lg:gap-4 lg:space-y-0">
            <div className="h-24 lg:h-96">
                <Card className="h-24 lg:h-96">
                    <div id="container">
                        <div className="flex rounded-[10px] h-full w-full justify-center">
                            <div className="border px-2 py-2 rounded-l-[10px] w-full ">
                                <input
                                    type="text"
                                    className=" border-none focus:border-none h-[25px] w-full focus:ring-0 focus:after:outline-none text-base bg-white"
                                    placeholder="Search Zephyr..."
                                />
                            </div>
                            <button className="px-2 rounded-r-[10px] border border-primary font-semibold text-white bg-primary">
                                Search
                            </button>
                        </div>
                    </div>


                    <div className="invisible overflow-hidden w-full h-full rounded justify-center lg:visible ">
                        <ListGroup className="w-full h-full py-2 overflow-y-auto space-y-2 bg-secondary p-2 ">
                            <ListGroup.Item href="#" className="bg-white enabled:focus:ring-none ring-none focus:bg-primary rounded ">
                                search content area
                            </ListGroup.Item>
                            <ListGroup.Item href="#" className="bg-white enabled:focus:ring-none ring-none focus:bg-primary rounded ">
                                search content area
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card>
            </div>
            <div className="col-span-2 h-96">
                <Card className="max-w-full h-full overflow-y-auto ">
                    {data ? (data.map((product, key) => (<AccordionWidget product={product} />))) : <p>Loading...</p>}
                </Card>

            </div>

        </div>);
}

export default ProductsCard;