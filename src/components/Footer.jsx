import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="" />
          <p className='text-gray-400 mt-4'>
          Die Faserleitung ist essenziell für moderne Kommunikation, dank ihrer hohen Geschwindigkeit und Zuverlässigkeit bei der Datentransmission. Das Unternehmen García SRL spezialisiert sich auf die Installation von Glasfaser-Netzen und bietet effiziente Verbindungen für private Haushalte und Firmen.
          </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Unternehmen</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Startseite</a>
            <a href="#Quienes" className='hover:text-white'>Über uns</a>
            <a href="#Contact" className='hover:text-white'>Kontakt</a>
            <a href="#" className='hover:text-white'>Datenschutzrichtlinie</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Kontakte </h3>
          <p className='text-gray-400 mb-4 max-w-80'>
            Die neuesten Nachrichten, Artikel und Updates direkt in Ihrem Postfach.
          </p>
          <p className='text-gray-400'>
            Sie können uns auch direkt per E-Mail kontaktieren:{' '}
            <a href="mailto:Pfreire@garciafibersrl.com" className='text-blue-500 hover:underline'>
              Pfreire@garciafibersrl.com
            </a>
            <br />
            <a href="mailto:Pfreire@garciafibersrl.com" className='text-blue-500 hover:underline'>
             +34 661 23 91 92
            </a>
            
          </p>
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;