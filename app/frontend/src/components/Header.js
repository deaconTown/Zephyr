import React from 'react';
import logo from '../assets/Zephyr Logo.png'
import { Avatar, 
  //Dropdown,
   Navbar } from 'flowbite-react';

const Header = () => {
  return (
    <Navbar fluid rounded className='bg-secondary h-32'>
      <Navbar.Brand>
        <img src={logo} className="scale-50" alt="zephyr Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
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
        <Navbar.Toggle className='hover:text-accent text-base' />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;