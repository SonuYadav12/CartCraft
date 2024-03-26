import React from "react";
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="flex justify-center items-center mb-5">
      <div className="flex flex-col md:flex-row md:mx-20 mt-4 md:mt-0">
        <div className="hidden md:flex flex-col items-center justify-center gap-2">
          {[...Array(3)].map((_, index) => (
            <img
              key={index}
              className="w-60 h-40 rounded-md shadow-md"
              src={product.image}
              alt=""
            />
          ))}
        </div>
        <div className="flex justify-center md:justify-start items-center w-full md:w-6/12 p-2 bg-red-400">
          <img
            className="rounded-lg shadow-lg w-full h-full shadow-black"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex flex-col md:m-6 md:justify-center">
          <h1 className="font-medium font-serif text-3xl">{product.name}</h1>
          <div className="flex gap-1 h-4 my-2">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={start_icon} alt="" />
            ))}
            <img src={star_dull_icon} alt="" />
            <p className="text-sm font-bold">(122)</p>
          </div>
          <div className="flex gap-5 mb-2">
            <div className="text-gray-600 stroke-inherit font-serif">${product.old_price}</div>
            <div className="font-bold font-serif">${product.new_price}</div>
          </div>
          <div className="border-2 py-8 rounded-md font-medium">
            <p>
             
Introducing our versatile Essential Cotton Shirt: a wardrobe staple crafted for comfort and style. Made from premium cotton, it offers a tailored fit and timeless appeal. Perfect for any occasion, from casual outings to formal affairs.
            </p>
          </div>
          <div>
            <h1 className="text-lg">Select Size</h1>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 rounded lg bg-gray-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full bg-red-600 rounded-sm p-3 mt-3 text-center text-2xl font-serif">
            <button>ADD TO CART</button>
          </div>
          <p>
            <span className="font-bold mr-2">Category:</span> Women, T-Shirt, Crop Top
          </p>
          <p>
            <span className="font-bold mr-2">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
