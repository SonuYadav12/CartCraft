import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productResponse = await fetch("http://localhost:4000/allproduct");
        if (!productResponse.ok) {
          throw new Error("Failed to fetch products");
        }
        const productData = await productResponse.json();
        setAllProduct(productData);

        // Fetch cart data if user is authenticated
        if (localStorage.getItem("auth-token")) {
          const cartResponse = await fetch("http://localhost:4000/getcart", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          });
          if (!cartResponse.ok) {
            throw new Error("Failed to fetch cart data");
          }
          const cartData = await cartResponse.json();
          setCartItem(cartData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
  

  const addtocart = async (itemId) => {
    try {
      const response = await fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
  
      setCartItem((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));
      console.log("Item added to cart successfully");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      
    }
  };
  

  const removetocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0), 
    }));
    
    const authToken = localStorage.getItem("auth-token");
    if(authToken){
      fetch("http://localhost:4000/removefromcart",{
        method:"POST",
        headers:{
          "auth-token": authToken,
          "Content-Type":"application/json",
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
      })
      .catch((error) => {
        console.error("Error removing from cart:", error);
      });
    }
  };
  
  

  const getTotalcartitem = () => {
    return Object.values(cartItem).reduce((total, quantity) => total + quantity, 0);
  };

  const contextValue = {
    allProduct,
    cartItem,
    addtocart,
    removetocart,
    getTotalcartitem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
