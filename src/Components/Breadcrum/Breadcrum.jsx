import React from 'react';
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className='flex gap-1 mx-20 font-semibold items-center m-2 p-2'>
      <h1>Home</h1>
      <img src={arrow_icon} alt="" />
      <h1>Shop</h1>
      <img src={arrow_icon} alt="" />
      {product && (
        <>
          <span>{product.category}</span>
          <img src={arrow_icon} alt="" />
          <span className='wrap hidden md:flex'>{product.name}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrum;
