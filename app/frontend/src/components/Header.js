import React, { useState } from 'react';
import logo from '../assets/Zephyr Logo.png'
import { Avatar, 
  Button, 
  //Dropdown,
   Navbar } from 'flowbite-react';
import LoginModal from './login_modal';

const Header = () => {
  const [ isModalOpen, setModalOpen ] = useState(false)
  const [ selectedView, setView ] = useState("")

  const handleModalClose = () => {
    setModalOpen(false)
  }
  return (
    <Navbar fluid rounded className='bg-secondary h-32 xs:px-2'>
      <Navbar.Brand >
        <img src={logo} className="h-12 sm:scale-110" alt="zephyr Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 xs:gap-2">
        <Avatar alt="User settings" bordered />
        {/* <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item> */}
        <Navbar.Toggle className='hover:text-primary' />
      </div>
      <Navbar.Collapse className='bg-white z-50 md:bg-secondary rounded text-base font-semibold  '>
        <Navbar.Link className="[ text-[17px] ]" href="#">Home</Navbar.Link>
        <Navbar.Link className="[ text-[17px] ]" href="#">About</Navbar.Link>
        <Navbar.Link className="[ text-[17px] ]" href="#">Services</Navbar.Link>
        <Navbar.Link className="visible lg:invisible [ text-[17px] ]" onClick={() => {setModalOpen(true); setView('login')}}>Login</Navbar.Link>
        <Navbar.Link className="visible lg:invisible [ text-[17px] ]" onClick={() => {setModalOpen(true); setView('signup')}}>Sign-Up</Navbar.Link>
      </Navbar.Collapse>
      <div className="hidden md:z-0 invisible lg:visible [ registration-buttons ][ flex flex-row ] ">
        <Button onClick={() => {setModalOpen(true); setView('login')}} className="[ login-btn ][ w-[150px] ][ bg-gradient-to-r from-[#1c3e35] to-[#247a4d] ]">Login</Button>
        <Button onClick={() => {setModalOpen(true); setView('signup')}} className="[ sign-up-btn ][ w-[150px] ][ ml-2 ][ bg-gradient-to-r from-[#1c3e35] to-[#247a4d] ]">Sign Up</Button>
        {
          isModalOpen && < LoginModal isModalOpen={isModalOpen} initialView={selectedView} onClose={handleModalClose} />
        }
      </div>
    </Navbar>
  );
}
export default Header;