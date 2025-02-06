import React from 'react';
import {  FaCog,FaRegClock } from 'react-icons/fa';
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { GrUserWorker,GrUserExpert } from "react-icons/gr";


const CardItem = ({ icon: Icon, title }) => (
  <div className="bg-white p-8 rounded-2xl shadow-2xl 
  transition-all duration-500 
  hover:scale-105 
  hover:rotate-2 
  hover:shadow-2xl 
  hover:bg-gradient-to-r 
  from-blue-50 to-blue-100
  transform group
  cursor-pointer
  relative
  overflow-hidden
  flex flex-col items-center justify-center
  text-center
  h-64"> {/* Ajusta la altura (h-64) según necesites */}
    <Icon className="text-7xl text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
    <h3 className="text-2xl">{title}</h3>
  </div>
);

const Cards = () => {
  const cardData = [
    {
      icon: FaRegClock,
      title: "Geschwindigkeit und Effizienz",
    },
    {
      icon: GrUserExpert,
      title: "Berufserfahrung",
    },
    {
      icon: GrUserWorker,
      title: "qualifiziertes Personal",
    },
    {
      icon: TbBuildingBroadcastTower,
      title: "Technologische Innovation und Maschinen",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
