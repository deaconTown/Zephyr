import React from 'react';
import {BsFacebook, BsInstagram,BsTwitter, BsGithub,BsDribbble} from 'react-icons/bs';
import {Footer} from 'flowbite-react';
import logo from '../assets/logo-lg.png'
import lynk from '../assets/lynk.png'

const PageFooter = () =>{
    return (
      <div  className="[ footer ][ bg-secondary ][ h-[400px] w-screen bottom-0 overflow-hidden mt-2 ][ px-[20px] py-[10px] ][ text-white ][ flex flex-col ][ md:visible phone:hidden ]">
        <div className='[ footer-top ][ flex flex-row ]'>
          <div className="[ logo-container ][ w-[350px] ]">
            <img className="[ logo-img ][ scale-[0.75] ]" src={logo} alt="Zephyr Logo" />
          </div>
          <div className="[ zephyr-information-section ][ my-auto ][ w-[400px] ][ flex flex-col ]">
            <p className="[ zephyr-tagline-txt ][ text-primary font-[Preahvihear] text-[18px] ]">
              Escape the wait, embrace the speed! Skip the lines and seize your moments with Zephyr, your ticket to a wait-free world. Pre-order your cravings, beat the rush, and relish every second. Time is precious, make it yours with Zephyr.
            </p>
            <div className="[ accepted-payments-section ][ mt-[40px] ]">
              <p className="[ accepted-payments-txt ][ text-[20px] font-[Roboto] text-primary font-bold ]">Accepted Payments</p>
              <div className="[ payments-section ][ flex flex-row ][ gap-2 ][ mt-[5px] ]">
                  <div className="[ payment-option ][ flex ][ w-[58px] h-[40px] ][ items-center ][ bg-white ][ rounded-[5px] ]">
                    <img className="[ payment-option-img ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png" alt="Stripe"/>
                  </div>
                  <div className="[ payment-option ][ flex ][ w-[58px] h-[40px] ][ items-center ][ bg-white ][ rounded-[5px] ]">
                    <img className="[ payment-option-img ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png" alt="Visa"/>
                  </div>
                  <div className="[ payment-option ][ flex ][ w-[58px] h-[40px] ][ items-center ][ bg-white ][ rounded-[5px] ]">
                    <img className="[ payment-option-img ][ mx-auto ]" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png" alt="Maastercard" />
                  </div>
                  <div className="[ payment-option ][ flex ][ w-[58px] h-[40px] ][ items-center ][ bg-white ][ rounded-[5px] ]">
                    <img className="[ payment-option-img ][ mx-auto ]" src={lynk} alt="Lynk"/>
                  </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-[40px] absolute mt-[60px] right-[20px]">
            <div className="[ my-auto ]">
              <Footer.Title title="Services" className="[ text-primary font-semibold text-[20px] font-[Preahvihear] ]" />
              <Footer.LinkGroup col className="[ text-primary font-[Ubuntu] text-[14px] font-semibold ]">
                <Footer.Link href="#">Gift Card</Footer.Link>
                <Footer.Link href="#">Order Pickup</Footer.Link>
                <Footer.Link href="#">Gift Card</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="[ my-auto ]">
              <Footer.Title title="Resources" className="[ text-primary font-semibold text-[20px] font-[Preahvihear] ]" />
              <Footer.LinkGroup col className="[ text-primary font-[Ubuntu] text-[14px] font-semibold ]">
              <Footer.Link href="#">Why Zephyr?</Footer.Link>
                <Footer.Link href="#">Features</Footer.Link>
                <Footer.Link href="#">Become a Merchant</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="[ my-auto ]">
              <Footer.Title title="About" className="[ text-primary font-semibold text-[20px] font-[Preahvihear] ]" />
              <Footer.LinkGroup col className="[ text-primary font-[Ubuntu] text-[14px] font-semibold ]">
              <Footer.Link href="#">About Zephyr</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Zephyr Merchants</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="[ footer-bottom ][ mt-4 ][ flex w-full justify-between ]">
          <Footer.Copyright href="#" by="Zephyr™" year={2023}  className="[ footer-copyright ][ text-primary font-[Roboto] font-semibold ]" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
      
    );
}

export default PageFooter;