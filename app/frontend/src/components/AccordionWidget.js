import React from "react";
import { Accordion, Button } from "flowbite-react";

const AccordionWidget = ({title,description}) => {
    return(
        <Accordion collapseAll >
            <Accordion.Panel>
                <Accordion.Title className='hover:bg-accent1 hover:text-accent2 bg-primary text-white focus:ring-secondary'>
                    {title}
                </Accordion.Title>
                <Accordion.Content className="bg-accent2 font-semibold">
                    <div>
                        <p>{description}</p>
                    </div>
                    <div className="flex justify-end">
                        <Button gradientDuoTone="greenToBlue">
                            Order
                        </Button>
                    </div>

                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}

export default AccordionWidget;