import React from "react";

const Item = ({ id, name, image, oldprice, newprice }) => {
  return (
    <div key={id} className="p-2 bg-white rounded-xl shadow-black shadow-lg cursor-pointer w-80 flex flex-col items-center justify-center">
      <img  className="rounded-lg" src={image} alt="" />
      <p>{name}</p>
      <div className="flex w-full items-center justify-start gap-5 p-3">
        <div className=" font-bold font-serif">${newprice}</div>
        <div className=" font-serif font-medium">${oldprice}</div>
      </div>
    </div>
  );
};

export default Item;
