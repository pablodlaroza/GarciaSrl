import React, { useState } from 'react'
import NavBar from './NavBar'
import {motion} from 'framer-motion'
import Cards from './Cards'
import Contact from './Contact'
import { assets } from '../assets/assets'
function Header() {
  return (
    <div className="">
      <div
        className="min-h-screen md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[80vh] 
                   bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg rounded-br-[50px]"
        style={{ backgroundImage: "url('/GarciaSrl/header_image.jpg')" }}
        id="Header"
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <NavBar />
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24">
          {/* Sección de logo, texto principal y formulario */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Columna izquierda: Logo y texto */}
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 mt-16">
              {/* Logo */}
              <div className="relative mb-4 lg:mb-6">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-[0.5px]"></div>
                <img
                  className="w-32 lg:w-52 rounded-full blur-[0.5px] opacity-80 transition-all duration-300 ease-in-out hover:blur-none hover:opacity-100 hover:scale-105"
                  src={assets.logo}
                  alt=""
                />
                            </div>

              {/* Texto principal */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                               font-semibold leading-tight mb-2 mt-0 lg:mt-4 text-center lg:text-left">
                  Gemeinsam Zukunft gestalten, Menschen verbinden
                </h2>
                <h1 className="text-xl">Spezialisten für Glasfaserinstallationen</h1>
              </motion.div>
            </div>

            {/* Columna derecha: Formulario de contacto (más grande) */}
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Contact className="bg-white/90 p-8 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards component */}
      <div className="mt-8 lg:mt-[-150px] relative z-10">
        <Cards />
      </div>
    </div>
  );
}

export default Header;