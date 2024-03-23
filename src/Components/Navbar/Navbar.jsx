import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Shop");

  return (
    <div className="flex flex-col md:flex-row items-center justify-around shadow-lg p-5 bg-white">
      <div className="flex items-center">
        <img className="w-14 mr-2" src={logo} alt="logo" />
        <h1 className="text-xl font-bold">SHOPPER</h1>
      </div>
      <div className="md:block hidden">
        <ul className="flex gap-4">
          <li>
            <span
              onClick={() => setActiveMenu("Shop")}
              className={`block mb-1 cursor-pointer ${
                activeMenu === "Shop" ? "text-red-500 font-bold" : ""
              }`}
            >
              <Link to="/">Shop</Link>
            </span>
          </li>
          <li
            onClick={() => setActiveMenu("Men")}
            className={`cursor-pointer ${
              activeMenu === "Men" ? "text-red-500 font-bold" : ""
            }`}
          >
            <Link to="/men">Men</Link>
          </li>
          <li
            onClick={() => setActiveMenu("Women")}
            className={`cursor-pointer ${
              activeMenu === "Women" ? "text-red-500 font-bold" : ""
            }`}
          >
            <Link to="/women">Women</Link>
          </li>
          <li
            onClick={() => setActiveMenu("Kids")}
            className={`cursor-pointer ${
              activeMenu === "Kids" ? "text-red-500 font-bold" : ""
            }`}
          >
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-1 cursor-pointer">
        <Link to="/login">
          <button className="shadow-sm p-2 rounded-2xl px-4 bg-gray-200">
            Login
          </button>
        </Link>
        <div className="relative">
          <Link to="/cart">
            <img src={cart_icon} alt="cart" className="w-6 h-6" />
          </Link>
          <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-700 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
