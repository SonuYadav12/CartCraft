import React from 'react';
import new_collection from "../Assets/new_collections";
import Item from '../Items/Item';

const NewCollection = () => {
  return (
    <div className=' flex flex-col items-center justify-cente bg-gradient-to-b from-pink-300 via-white to-white '>
    <h1 className=' text-3xl font-semibold p-2 '>NEW COLLECTIONS</h1>
    <hr className="h-2 w-60 bg-black rounded-full mb-4" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
        {new_collection.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
