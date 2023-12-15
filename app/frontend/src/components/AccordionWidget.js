import React from "react";
import { Accordion, Button } from "flowbite-react";
import OrderDetails from "./OrderDetails";

const AccordionWidget = ({product}) => {
    return(
        <Accordion collapseAll >
            <Accordion.Panel>
                <Accordion.Title className='hover:bg-accent1 hover:text-accent2 bg-primary text-white focus:ring-secondary'>
                    {product.name}
                </Accordion.Title>
                <Accordion.Content className="bg-accent2 font-semibold">
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <Button gradientDuoTone="greenToBlue" onClick={() => {
                            const item = localStorage.setItem('item',JSON.stringify(product));
                            OrderDetails({item})
                        }
                            }>
                            Order
                        </Button>
                    </div>

                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}

export default AccordionWidget;