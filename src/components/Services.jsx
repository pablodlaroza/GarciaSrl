import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dienstleistungsdaten
  const dienstleistungen = [
    {
      title: "Glasfaser-Installation",
      description: "Fachleute, spezialisiert auf Glasfaser-Installation.",
      image: assets.instalacion1,
    },
    {
      title: "Einblasen",
      description: "Einblasservice für effiziente Reinigung.",
      image: assets.soplado,
    },
    {
      title: "Aktivierung",
      description: "Schnelle und sichere Aktivierung von Diensten.",
      image: assets.activacion,
    },
    {
      title: "Asphalt",
      description: "Reparatur und Wartung von Asphaltoberflächen.",
      image: assets.instalacion2,
    },
    {
      title: "Sanierung",
      description: "Umfassende Lösungen für Umweltsanierung.",
      image: assets.saneamiento,
    },
  ];

  // Verdoppeln der Dienstleistungen für den Endlos-Effekt
  const endloseDienstleistungen = [...dienstleistungen, ...dienstleistungen];

  // Funktion zum Wechseln zum nächsten Slide
  const nächsterSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dienstleistungen.length);
  };

  // Funktion zum Wechseln zum vorherigen Slide
  const vorherigerSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? dienstleistungen.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="w-full bg-blue-400 rounded-tl-[5rem] rounded-br-lg p-6 md:p-8"
      style={{ maxWidth: "100vw" }}
      id="Dienstleistungen"
    >
      {/* Titel und Untertitel */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-2">Unsere Dienstleistungen</h1>
        <p className="text-xl text-black opacity-80">
          Entdecken Sie unsere herausragenden Dienstleistungen.
        </p>
      </div>

      {/* Karussell */}
      <div className="relative overflow-hidden rounded-lg shadow-md p-4 md:p-6">
        {/* Bildcontainer */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex % dienstleistungen.length) * 100}%)`,
          }}
        >
          {endloseDienstleistungen.map((dienstleistung, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
            >
              <div
                className="relative rounded-lg overflow-hidden shadow-md mx-auto group transition-all duration-300 ease-in-out cursor-pointer"
              >
                {/* Bild mit Hover-Effekt */}
                <img
                  src={dienstleistung.image}
                  alt={dienstleistung.title}
                  className="w-full h-96 object-cover md:h-[350px] lg:h-[400px] 
                    group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300 ease-in-out"
                />
                {/* Overlay mit Informationen */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg 
                  group-hover:bg-opacity-30 transition duration-300 ease-in-out">
                  <div className="text-white text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {dienstleistung.title}
                    </h2>
                    <p className="text-sm md:text-base">{dienstleistung.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigationsbuttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={vorherigerSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Vorheriger
          </button>
          <button
            onClick={nächsterSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Nächster
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
