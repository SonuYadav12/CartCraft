import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"
const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div className='flex  gap-1 mx-20 font-semibold items-center m-2 p-2'>
      <h1>Home</h1>
      <img src={arrow_icon}  alt="" />
      <h1>SHop</h1>
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      <div className='wrap hidden md:flex'>{product.name}</div>
    </div>
  )
}

export default Breadcrum