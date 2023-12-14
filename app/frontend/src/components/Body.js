import React, { useState } from 'react';
import {Button} from 'flowbite-react';
import ProductCard from './ProductsCard';
import OrdersCard from './OrdersCard';
import ProfileCard from './ProfileCard';
const Body = () =>{

    const [selectCard, setSelectedCard] = useState(null);

    const handleButtonClick = (Card) => {
        if (Card === 'Product'){
            setSelectedCard('ProductCard');
        } else if (Card === 'Orders'){
            setSelectedCard('OrdersCard');
        }else if (Card === 'Profile'){
            setSelectedCard('ProfileCard');
        }
        
    };
    return(
        <div className='grid grid-cols-6 gap-4 mx-3 pt-10 scroll-m-1 h-screen'>
           <div className=' container p-2 space-y-6'>
            <Button gradientDuoTone='greenToBlue' className='text-base py-2 w-60' onClick={()=>handleButtonClick('Product')}>Products</Button>
            <Button gradientDuoTone='greenToBlue' className='text-base py-2 w-60' onClick={()=>handleButtonClick('Orders')}>Orders</Button>
            <Button gradientDuoTone='greenToBlue' className='text-base py-2 w-60' onClick={()=>handleButtonClick('Profile')}>Profile</Button>
           
        </div> 
           <div className='container p-2 col-span-4'>
         {
         selectCard==='ProductCard' ? <ProductCard /> 
         : selectCard ==='OrdersCard' ?<OrdersCard/> 
         :selectCard ==='ProfileCard' ? <ProfileCard/>
         : <div>Nothing selected </div>}
</div>
        </div>

    );
}

export default Body;