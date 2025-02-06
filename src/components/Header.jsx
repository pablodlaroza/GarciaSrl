import React, { useState } from 'react'
import NavBar from './NavBar'
import { motion } from "motion/react"
import Cards from './Cards'
import Contact from './Contact'

function Header() {
  

  const backgroundStyle = {
    backgroundImage: "url('/header_image.jpg')",
    backgroundSize: 'cover',
    transition: 'background-position 0.5s ease-in-out'
  };

  return (
    <div className=''>
      <div className='min-h-screen md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[80vh] 
    bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-tr-lg rounded-br-[50px]'
      style={backgroundStyle}
      id='Header'>
        <div className='absolute top-0 left-0 right-0 z-50'>
          <NavBar/>
        </div>
        <div className='container mx-auto px-4 md:px-6 lg:px-8 pt-24 '>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <motion.div 
            initial={{opacity:0, y:100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='text-white lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-0 lg:mb-0'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                             font-semibold leading-tight mb-2 mt-8 lg:mt-0 text-center lg:text-left'>
                GEMEINSCHAFTEN ERHALTEN,
                MENSCHEN VERBINDEN
              </h2>
              <h1 className='text-xl'>Spezialisten für Glasfaserinstallationen</h1>
              
            </motion.div>

            <div>
              <Contact />
            </div>
          </div>
        </div>
        
        
       
      </div>
      
      {/* Cards component */}
      <div className='mt-8 lg:mt-[-150px] relative z-10'>
        <Cards />
      </div>
    </div>
  )
}

export default Header
