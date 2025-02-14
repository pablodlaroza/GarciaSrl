import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Ícono de correo electrónico

const EmailButton = () => {
  const email = "contacto@example.com"; // Dirección de correo electrónico
  const subject = encodeURIComponent("Consulta desde la página web"); // Asunto del correo
  const body = encodeURIComponent("Hola, quisiera más información sobre sus productos."); // Cuerpo del correo (opcional)

  const emailUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <a
      href={emailUrl}
      className="fixed bottom-4 right-32 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-6 shadow-lg hover:shadow-[0px_0px_15px_5px_rgba(0,122,255,0.7)] hover:scale-110 transition-all duration-300 ease-in-out transform flex items-center justify-center z-50"
      title="Envíanos un correo electrónico"
    >
      <FaEnvelope size={40} />
    </a>
  );
};

export default EmailButton;