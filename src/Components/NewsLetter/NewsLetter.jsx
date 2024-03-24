import React from 'react';

const NewsLetter = () => {
  return (
    <div className='bg-gradient-to-t  from-pink-300 to-white flex flex-col items-center gap-4 justify-center mt-6 py-10 px-6 md:p-20'>
      <hr className=' bg-black w-full h-1 mb-5 rounded-full' />
      <div className=' bg-gradient-to-t from-red-500 to-yellow-200 rounded-3xl w-full h-[300px] flex flex-col items-center p-5 md:p-0 justify-center'>
        <h1 className='font-semibold text-3xl md:text-4xl text-center'>Get Exclusive Offers On Your Email</h1>
      <p className='font-medium text-lg text-center'>Subscribe to our newsletter and stay updated</p>
      <div className='flex flex-col  md:flex-row items-center justify-center  w-full max-w-lg'>
        <input className='bg-gray-100  py-4 rounded-lg md:rounded-l-lg mb-2 md:mb-0  w-full md:px-20 md:w-auto' type="email" placeholder='Your Email id' />
        <button className='bg-black text-white p-4 rounded-lg md:rounded-r-lg w-full md:w-auto'>Subscribe</button>
      </div>
      </div>
    </div>
  );
}

export default NewsLetter;
