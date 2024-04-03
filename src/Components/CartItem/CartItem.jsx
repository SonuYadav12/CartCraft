import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItem = () => {
  const { allProduct, cartItem, removetocart } = useContext(ShopContext);

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    allProduct.forEach((product) => {
      const quantity = cartItem[product.id];
      if (quantity > 0) {
        total += product.new_price * quantity;
      }
    });
    return total;
  };

  return (
    <div className="container mx-auto bg-gradient-to-t from-pink-300 via-white to-white">
      <div className="bg-gray-100 overflow-x-auto md:mx-10 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Remove</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allProduct.map((product) => {
              const quantity = cartItem[product.id];
              if (quantity > 0) {
                return (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img className="h-12 w-12" src={product.image} alt={product.name} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name.substring(0, 20)}...</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${product.new_price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <img
                        src={remove_icon}
                        className="cursor-pointer w-6 h-6"
                        onClick={() => removetocart(product.id)}
                        alt=""
                      />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-blue-50 p-4 mt-4 md:mx-10 rounded-lg">
        <h1 className="text-lg font-bold mb-2 text-gray-800">Cart Totals</h1>
        <div className="border-t border-gray-300 py-2">
          <div className="flex justify-between">
            <p className="text-gray-800">Sub-Total</p>
            <p className="text-gray-800">${calculateTotalPrice()}</p>
          </div>
        </div>
        <div className="border-t border-gray-300 py-2">
          <div className="flex justify-between">
            <p className="text-gray-800">Shipping Fee</p>
            <p className="text-gray-800">Free</p>
          </div>
        </div>
        <div className="border-t border-gray-300 py-2">
          <div className="flex justify-between">
            <h3 className="text-gray-800">Total</h3>
            <h3 className="text-gray-800">${calculateTotalPrice()}</h3>
          </div>
        </div>
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md w-full md:w-auto">PROCEED TO CHECKOUT</button>
        <div className="mt-4">
          <p className="text-sm text-gray-800">If you have a promo code, Enter it here</p>
          <div className="flex mt-2">
            <input className="px-2 py-1 border border-gray-300 rounded-l-md" type="text" placeholder="Promo Code" />
            <button className="px-4 py-1 bg-gray-800 text-white rounded-r-md ml-1 md:ml-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
