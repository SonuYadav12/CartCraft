import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Shop");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="flex md:flex-row  items-center justify-around shadow-lg p-2 bg-white">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-14 mr-2" src={logo} alt="logo" />
        </Link>
        <h1 className="text-xl font-bold">SHOPPER</h1>
      </div>
      <div className="md:flex hidden">
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className={`${
                activeMenu === "Shop" ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => handleMenuClick("Shop")}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/men"
              className={`${
                activeMenu === "Men" ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => handleMenuClick("Men")}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/women"
              className={`${
                activeMenu === "Women" ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => handleMenuClick("Women")}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              className={`${
                activeMenu === "Kids" ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => handleMenuClick("Kids")}
            >
              Kids
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex items-center justify-center gap-1 cursor-pointer">
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
      {/* Hamburger menu */}
      <div className="md:hidden ">
        <button onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {showMenu && (
          <div className="mt-2">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    handleMenuClick("Shop");
                    toggleMenu();
                  }}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  onClick={() => {
                    handleMenuClick("Men");
                    toggleMenu();
                  }}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  onClick={() => {
                    handleMenuClick("Women");
                    toggleMenu();
                  }}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  onClick={() => {
                    handleMenuClick("Kids");
                    toggleMenu();
                  }}
                >
                  Kids
                </Link>
              </li>
              <li>
                <div className="relative">
                  <Link to="/cart">
                    <img src={cart_icon} alt="cart" className="w-6 h-6" />
                  </Link>
                  <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-700 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs">
                    0
                  </div>
                </div>
              </li>
              <li>
                 <Link to="/login">
                  <button className="shadow-sm p-2 rounded-2xl  md:bg-gray-200">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
