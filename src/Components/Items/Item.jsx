import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, oldprice, newprice }) => {
  return (
    <div
      key={id}
      className="p-4 bg-white rounded-xl shadow-black shadow-lg cursor-pointer max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105"
    >
      <Link to={`/product/${id}`}>
        <img
          className="rounded-lg w-full h-auto duration-300 transition-transform"
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt={name}
        />
      </Link>
      <div className="mt-4">
        <Link to={`/product/${id}`} className="text-lg font-semibold hover:text-gray-700">
          {name}
        </Link>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-xl font-bold text-gray-800">${newprice}</div>
        {oldprice && <div className="text-sm font-medium text-gray-500 line-through">${oldprice}</div>}
      </div>
    </div>
  );
};

export default Item;
