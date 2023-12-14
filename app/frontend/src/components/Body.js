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
        <div className=' block pt-4 md:grid md:grid-cols-3 mx-3 scroll-m-1 lg:grid-cols-6 lg:gap-4'>
           <div className='flex flex-row space-x-4 p-2 justify-center'>
            <Button gradientDuoTone='greenToBlue' className='text-base w-full py-2 ' onClick={()=>handleButtonClick('Product')}>Products</Button>
            <Button gradientDuoTone='greenToBlue' className='text-base w-full py-2 ' onClick={()=>handleButtonClick('Orders')}>Orders</Button>
            <Button gradientDuoTone='greenToBlue' className='text-base w-full py-2 ' onClick={()=>handleButtonClick('Profile')}>Profile</Button>
           
        </div> 
           <div className='flex flex-row justify-center p-2 lg:col-span-4'>
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