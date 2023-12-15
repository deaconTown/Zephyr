import React, { useState } from 'react';
import logo from '../assets/logo-lg.png'
import { Avatar, Button} from 'flowbite-react';
import LoginModal from './login_modal';

const Header = () => {
  const [ isModalOpen, setModalOpen ] = useState(false)
  const [ selectedView, setView ] = useState("")

  const handleModalClose = () => {
    setModalOpen(false)
  }
  return (
    <div className="[ header ][ bg-secondary ][ h-[150px] ][ flex flex-row ][ px-[20px] ][ justify-between ][ md:visible phone:hidden ]">
        <img src={logo} className="[ scale-[1.4] ][ ml-[40px] ]" alt="Zephyr Logo" />   
        <div className="[ nav-links ][ flex flex-row ][ my-auto ]">
            <a className="[ text-[24px] font-[Lobster] text-primary ]" href="/#" active>Home</a>
            <a className="[ text-[24px] font-[Lobster] text-primary ][ ml-[40px] ]" href="/#">About</a>
            <a className="[ text-[24px] font-[Lobster] text-primary ][ ml-[40px] ]" href="/#">Services</a>
            <a className="[ text-[24px] font-[Lobster] text-primary ][ ml-[40px] ]" href="/#">Pricing</a>
            <a className="[ text-[24px] font-[Lobster] text-primary ][ ml-[40px] ]" href="/#">Contact</a>
       </div>
       <div className="[ registration-buttons ][ flex flex-row ][ my-auto ]">
         <Button color='' onClick={() => {setModalOpen(true); setView('login')}} className="[ login-btn ][ w-[150px] h-[40px] ][ bg-primary text-white ]">Login</Button>
         <Button color='' onClick={() => {setModalOpen(true); setView('signup')}} className="[ sign-up-btn ][ w-[150px] h-[40px] ][ ml-2 ][ bg-primary text-white ]">Sign Up</Button>
         {
           isModalOpen && < LoginModal isModalOpen={isModalOpen} initialView={selectedView} onClose={handleModalClose} />
         }
       </div>
       { false && <Avatar settings bordered rounded /> }  
    </div>
  );
}
export default Header;