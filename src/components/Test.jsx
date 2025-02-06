import React from "react";
import { motion } from "framer-motion";

const TestMotion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-gray-100 py-16 px-4 text-center"
    >
      <h1 className="text-3xl font-bold">Hola, Framer Motion!</h1>
      <p className="mt-4">Esta es una prueba de animación.</p>
      <img src="/header_image.jpg" alt="" />
    </motion.div>
  );
};

export default TestMotion;