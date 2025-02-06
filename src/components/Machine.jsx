import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Maquinaria = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const maquinaria = [
    assets.maquinaria1,
    assets.maquinaria2,
    assets.maquinaria3,
    assets.maquinaria4,
    assets.maquinaria5,
    assets.maquinaria6,
    assets.maquinaria7,
    assets.maquinaria8,
    assets.maquinaria9,
    assets.maquinaria10,
    assets.maquinaria11,
  ];

  const infiniteMaquinaria = [...maquinaria, ...maquinaria];

  const nextSlide = () =>
    setActiveIndex((prevIndex) => (prevIndex + 1) % maquinaria.length);

  const prevSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? maquinaria.length - 1 : prevIndex - 1
    );

  return (
    <motion.div 
    initial={{opacity:0, x:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    
    className="w-full p-6 md:p-8 bg-white" id="Maquinaria">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">Unsere Maschinen</h1>
        <p className="text-xl text-gray-600 opacity-80">
          Entdecken Sie unsere Flotte hochwertiger Geräte.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-md p-4 md:p-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex % maquinaria.length) * 100}%)`,
          }}
        >
          {infiniteMaquinaria.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
            >
              <img
                src={image}
                alt={`Maschine ${index+1}`}
                className="w-full h-96 object-cover md:h-[350px] lg:h-[400px] 
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Vorheriges
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Nächstes
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Maquinaria;
