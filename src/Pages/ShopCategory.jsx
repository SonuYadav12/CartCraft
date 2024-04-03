import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);
  
  const filteredProducts = allProduct.filter(item => item.category === props.category);
  
  return (
    <div className='flex flex-col items-center justify-center  p-5 bg-gradient-to-t from-pink-300 to-white'>
      <img className='bg-red-500 h-40 md:h-auto' src={props.banner} alt="" />
      <div className='bg-gray-200 w-full p-5 flex flex-col items-center justify-center '>
        <p>
          <span className='font-bold font-serif'>Showing 1-{filteredProducts.length}</span> Out of {allProduct.length} products
        </p>
        <div className='bg-red-500 m-5 font-bold font-serif px-2 rounded-xl flex gap-4 p-2 items-center justify-center'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          {filteredProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
          ))}
        </div>
        <div className="bg-gray- shadow-2xl text-black font-serif font-bold hover:bg-gray-900 hover:text-white hover:shadow-current md:hover:shadow-yellow-600 p-5 rounded-3xl m-5">  
          Explore More
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
