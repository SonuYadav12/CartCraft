import React from 'react';
import data from "../Assets/data";
import Item from '../Items/Item';

const ReleatedProducts = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-20">
      <div className='flex flex-col items-center justify-center mb-5'>
        <div className='text-xl sm:text-2xl md:text-3xl font-semibold p-2 items-center justify-center flex flex-col'>
          <h1>Related Products</h1>
          <hr className="h-2 w-24 sm:w-40 md:w-60 bg-black rounded-full mb-4" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
          {data.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
          })}
        </div>
      </div>
    </div>
  );
};

export default ReleatedProducts;
