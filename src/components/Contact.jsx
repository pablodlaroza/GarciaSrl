import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [result, setResult] = useState(''); // Estado para mostrar el estado de envío

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mostrar estado de "enviando"
    setResult('Sending...');

    try {
      // Crear un objeto FormData con los datos del formulario
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('message', formData.message);
      formPayload.append('access_key', 'ced3c3f1-ac3d-4872-a737-35dbda385dcd'); // Clave de acceso de Web3Forms

      // Enviar el formulario a la API de Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        // Reiniciar el formulario y mostrar mensaje de éxito
        setResult('');
        toast.success('Message Sent Successfully');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // Manejar errores de la API
        console.error('Error:', data);
        toast.error('Failed to send message. Please try again.');
        setResult('');
      }
    } catch (error) {
      // Capturar errores inesperados
      console.error('Error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setResult('');
    }
  };

  return (
    <div id='Contact' className="my-10 xl:mb-40 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg" style={{ minHeight: '600px' }}>
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold text-gray-900">Kontaktieren Sie uns</h2>
          <p className="mt-4 text-lg text-gray-600">Wir freuen uns, von Ihnen zu hören!</p>
        </div>
        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          {/* Campo para el nombre */}
          <div>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
              placeholder="Ihr Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Campo para el email */}
          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
              placeholder="E-Mail-Adresse"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Campo para el teléfono */}
          <div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
              placeholder="Telefonnummer"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Campo para el mensaje */}
          <div>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg resize-none"
              placeholder="Ihre Nachricht"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              disabled={result === 'Sending...'}
            >
              {result || 'Senden'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;