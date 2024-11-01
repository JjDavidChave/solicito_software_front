// Banner.js
import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black/70 text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-300">Prueba Rick and Morty</h1>
        <p className="text-xl md:text-2xl mb-8">Solicito Software</p>
        <FaLaptopCode size={50} className="text-yellow-300" />
      </div>
    </div>
  );
};

export default Banner;
