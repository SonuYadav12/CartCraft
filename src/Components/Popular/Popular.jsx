import React from 'react';
import data_product from "../Assets/data";
import Item from '../Items/Item';


const Popular = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <h1 className=' text-3xl font-semibold p-2 '>POPULAR IN WOMEN</h1>
        <hr className="h-2 w-60 bg-black rounded-full mb-2" />
        <div className='flex items-center justify-center gap-3 '>
            {
            data_product.map((item, i) => (
               <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
            ))
            }
        </div>
    </div>
  );
};

export default Popular;
