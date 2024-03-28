import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, cartItem, removetocart } = useContext(ShopContext);

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    all_product.forEach((product) => {
      const quantity = cartItem[product.id];
      if (quantity > 0) {
        total += product.new_price * quantity;
      }
    });
    return total;
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="md:flex  hidden justify-around items-center font-serif p-5 ml-1  bg-gray-200">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          {/* <p>Total</p> */}
          <p>Remove</p>
        </div>
        <hr />
        <div className="bg-gray-100">
          {all_product.map((product) => {
            const quantity = cartItem[product.id];
            if (quantity > 0) {
              return (
                <div key={product.id} className="flex items-center justify-around mx-4 my-2 p-2 border-b border-gray-300">
                  <img className="w-20 h-20 object-contain " src={product.image} alt={product.name} />
                  <div className="flex wrap w-20"> 
                  <p className="font-serif ">{product.name.substring(0,20)}...</p>
                  </div>
                  
                  <p>${product.new_price}</p>
                  <button className="px-3 py-1 bg-gray-300">{quantity}</button>
                  {/* <p>${product.new_price * quantity}</p> */}
                  <img
                    src={remove_icon}
                    className="cursor-pointer w-6 h-6"
                    onClick={() => removetocart(product.id)}
                    alt=""
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="bg-blue-50 p-4 mt-4">
          <h1 className="text-lg font-bold mb-2">Cart Totals</h1>
          <div className="border-t border-gray-300 py-2">
            <div className="flex justify-between">
              <p>Sub-Total</p>
              <p>${calculateTotalPrice()}</p>
            </div>
          </div>
          <div className="border-t border-gray-300 py-2">
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
          </div>
          <div className="border-t border-gray-300 py-2">
            <div className="flex justify-between">
              <h3>Total</h3>
              <h3>${calculateTotalPrice()}</h3>
            </div>
          </div>
          <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md">PROCEED TO CHECKOUT</button>
          <div className="mt-4">
            <p className="text-sm">If you have a promo code, Enter it here</p>
            <div className="flex mt-2">
              <input className="px-2 py-1 border border-gray-300 rounded-l-md" type="text" placeholder="Promo Code" />
              <button className="px-4 py-1 bg-gray-800 text-white rounded-r-md">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
