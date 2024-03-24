import React from "react";
import hero from "../Assets/hero_image.png";
import hand from "../Assets/hand_icon.png";
import heroicon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-pink-300 to-white w-full flex items-center justify-center overflow-x-hidden">
      <div className="max-w-screen-lg mx-auto w-full h-full flex flex-col-reverse lg:flex-row gap-6 p-2">
        <div className="flex flex-col justify-center p-5 w-full lg:w-1/2">
          <div className="p-4">
            <p className="font-semibold text-xl">New ARRIVAL ONLY</p>
            <div className="font-bold text-5xl md:text-6xl lg:text-7xl gap-3 flex items-center">
              new <img className="w-12 md:w-16 lg:w-20 h-auto" src={hand} alt="" />
            </div>
            <div className="font-bold text-5xl md:text-6xl lg:text-7xl">
              <p>collection </p>
            </div>
            <p className="font-bold text-5xl md:text-6xl lg:text-7xl">for everyone</p>
            <button className="flex gap-3 text-white my-6 items-center justify-center bg-red-600 p-4  rounded-xl">
              Latest Collections <img src={heroicon} alt="" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
          <img className="max-w-full h-auto" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
