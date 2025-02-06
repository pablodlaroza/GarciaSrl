import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const FibraOpticaInfo = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
    className="w-full bg-gray-100 py-16 px-4 md:px-8 lg:px-16 " id="Quienes">
      {/* Hauptcontainer */}
      <div className=" mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
        {/* Linke Spalte: Information (oben auf Mobilgeräten) */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          {/* Firmenlogo */}
          <div className="mb-8 flex justify-center md:justify-start">
            <img
              src={assets.logo}
              alt="Logo GR FIBRA"
              className="w-20 rounded-full shadow-md"
            />
          </div>
          {/* Titel und Untertitel */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            GARCIA FIBER SRL: Glasfaser-Installation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Willkommen bei der Verbindung der Zukunft. Hier beginnt Ihr Weg zu einer ultraschnellen Verbindung.
          </p>
          {/* Detaillierte Beschreibung */}
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Die Idee, Hochgeschwindigkeits-Internet in jedes Haus und Unternehmen zu bringen, hat unsere Art zu kommunizieren verändert. Glasfaser gibt uns die Möglichkeit, uns von langsamen Verbindungen zu verabschieden und ein grenzenloses digitales Erlebnis zu genießen.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Verlassen Sie sich auf uns, um den Schritt in die Zukunft zu machen und Ihre Verbindung auf Glasfaser umzustellen, wobei ultraschnelle Geschwindigkeiten und Stabilität Ihres Signals garantiert werden. Sparen Sie Zeit und verbessern Sie Ihre Produktivität mit einer zuverlässigen Verbindung.
          </p>
          {/* Call-to-Action Button */}
          <a
            href="#Contact"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Installation anfordern
          </a>
        </div>

        {/* Rechte Spalte: Bilder (unten auf Mobilgeräten) */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-4 order-1 md:order-2">
          {/* Bildcontainer mit mehr horizontalem Platz */}
          <div className="hidden md:flex w-full gap-4">
            {/* Erstes Bild */}
            <img
              src={assets.instalacion1}
              alt="Glasfaser-Installation"
              className="w-1/2 h-[250px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
            {/* Zweites Bild */}
            <img
              src={assets.imagen3}
              alt="Ultraschnelle Verbindung"
              className="w-1/2 h-[250px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Mobile Version: gestapelte Bilder */}
          <div className="md:hidden flex flex-col gap-4">
            {/* Erstes Bild */}
            <img
              src={assets.instalacion}
              alt="Glasfaser-Installation"
              className="w-full h-[250px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
            {/* Zweites Bild */}
            <img
              src={assets.imagen3}
              alt="Ultraschnelle Verbindung"
              className="w-full h-[250px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FibraOpticaInfo;
