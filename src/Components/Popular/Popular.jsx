import React, { useEffect, useState } from 'react';
// import data_product from "../Assets/data";
import Item from '../Items/Item';

const Popular = () => {

  const [data_product,setdataproduct]=useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popwomen")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch new collection");
        }
        return response.json();
      })
      .then((data) => {
        setdataproduct(data);
      })
      .catch((error) => {
        console.error("Error fetching new collection:", error);
      });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center '>
    <h1 className=' text-3xl font-semibold p-2 '>POPULAR IN WOMEN</h1>
    <hr className="h-2 w-60 bg-black rounded-full mb-2" />
      <div className='flex flex-wrap justify-center gap-4 md:justify-start md:gap-8'>
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
