import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  
  const getTotalcartitem=()=>{
    let totalItem=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalItem+=cartItem[item];
      }
    }
    return totalItem
  }

  const addtocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }));
  };

  const removetocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const contextValue = { all_product, cartItem, addtocart, removetocart,getTotalcartitem };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
