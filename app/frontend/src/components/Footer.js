import React from 'react';
import {BsFacebook, BsInstagram,BsTwitter, BsGithub,BsDribbble} from 'react-icons/bs';
import {Footer} from 'flowbite-react';
import logo from '../assets/Zephyr Logo.png'

const PageFooter = () =>{
    return (
            <Footer container className='fixed md:bottom-0 visible bg-secondary text-white'>
      <div className="w-full border-s-secondary">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 md:justify-normal">
          <div className='-inset-6'>
            <Footer.Brand
            className='w-full h-full scale-50'
              src={logo}
              alt="Zephyr Logo"
            />s
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about"  className='text-black' />
              <Footer.LinkGroup col className='text-black'>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us"  className='text-black'/>
              <Footer.LinkGroup col className='text-black'>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal"  className='text-black'/>
              <Footer.LinkGroup col  className='text-black' >
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full md:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Zephyr™" year={2023}  className='text-black font-semibold' />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    );
}

export default PageFooter;