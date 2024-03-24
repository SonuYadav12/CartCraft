import React from 'react';
import exclusive_image from "../Assets/exclusive_image.png";
import arrow from "../Assets/arrow.png";

const Offers = () => {
  return (
    <div className='flex flex-col md:flex-row mt-20 bg-gradient-to-t from-pink-300 to-white items-center justify-center p-4 gap-10'>
      <div className='flex flex-col justify-center items-center md:items-start p-3 text-center md:text-left'>
        <h1 className='font-bold text-4xl md:text-8xl font-serif'>Exclusive</h1>
        <h1 className='font-bold font-serif text-4xl md:text-8xl'>Offers For You</h1>
        <p className='text-lg font-bold font-serif'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='text-white font-bold flex items-center gap-3 px-8 bg-red-500 p-4 rounded-full mt-4'>Check Now <img src={arrow} alt="" /> </button>
      </div>
      <div>
        <img className='h-80 md:h-[400px] p-5' src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
