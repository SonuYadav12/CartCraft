import React from 'react';
import footer_logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whats from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className='bg-white p-5 md:p-10 bg-gradient-to-b from-pink-300 to-white'>
      <hr className='w-full rounded-full h-1 bg-black mb-8 md:mb-10' />
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-8 md:mb-12'>
        <div className='flex items-center gap-2 md:gap-4'>
          <img src={footer_logo} alt="Logo" className="h-12 md:h-16" />
          <p className='font-semibold text-3xl md:text-4xl'>SHOPPER</p>
        </div>
        <ul className='flex flex-wrap md:flex-nowrap font-serif font-medium items-center justify-center md:justify-end gap-6'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex items-center justify-center md:justify-between mb-8 md:mb-12'>
        <div className='flex items-center gap-5'>
          <img src={insta} alt="Instagram" className="h-8 md:h-10" />
          <img src={pinterest} alt="Pinterest" className="h-8 md:h-10" />
          <img src={whats} alt="WhatsApp" className="h-8 md:h-10" />
        </div>
      </div>
      <div>
        <hr className='bg-black h-1 mb-4 md:mb-6' />
        <p className='font-bold font-serif text-lg md:text-xl text-center'>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
