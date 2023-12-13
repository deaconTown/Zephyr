import React, { useState } from 'react';
import Tabs from './Tabs';

const Body = () =>{
    const [content, setContent] = useState();
    return(
        <div className='grid grid-cols-6 gap-4 mx-3 pt-10 '>
           <div className=' container p-2 space-y-4'>
            <Tabs name = 'Products'/>
            <Tabs name = 'Orders'/>
            <Tabs name = 'Profile'/>
        </div> 
           <div className='container p-2 col-span-4'>
            
            this is second </div>
        </div>

    );
}

export default Body;