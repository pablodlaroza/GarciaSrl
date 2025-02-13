import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ícono de WhatsApp

const WhatsAppButton = () => {
  const phoneNumber = "+34661239192"; // Número de teléfono con código de país
  const message = encodeURIComponent("Hola, quisiera más información."); // Mensaje inicial (opcional)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-6 shadow-lg hover:shadow-[0px_0px_15px_5px_rgba(37,195,102,0.7)] hover:scale-110 transition-all duration-300 ease-in-out transform flex items-center justify-center z-50"
      title="Contáctanos por WhatsApp"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;