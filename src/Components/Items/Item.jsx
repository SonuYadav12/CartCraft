import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, oldprice, newprice }) => {
  return (
    <div
      key={id}
      className="p-2 bg-white rounded-xl shadow-black shadow-lg cursor-pointer w-80 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
    >
      <Link to={`/product/${id}`}>
        <img className="rounded-lg" src={image} alt="" />
      </Link>
      <p>{name}</p>
      <div className="flex w-full items-center justify-start gap-5 p-3">
        <div className=" font-bold font-serif">${newprice}</div>
        <div className=" font-serif font-medium">${oldprice}</div>
      </div>
    </div>
  );
};

export default Item;
