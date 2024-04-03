import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));
 
  return (
    <div className="flex flex-col justify-center">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
