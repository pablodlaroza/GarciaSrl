import React, {useEffect, useState} from 'react'
import {assets} from '../assets/assets'

function NavBar() {
  const [showMobileMenu,setshowMobileMenu] = useState(false)
  useEffect(()=>{
    if (showMobileMenu) {
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return ( )=>{
        document.body.style.overflow = 'auto'
    }
  },[setshowMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10 bg-white shadow-md'>
      <div className='container mx-auto flex items-center py-1 px-4 md:px-6 lg:px-8'>
        
      <a href="#Header" className='mr-auto'>
          <img 
            className='w-14
            mr-4
            rounded-xl 
            transition-all duration-500 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            hover:scale-110
            hover:brightness-110
            hover:contrast-125
            cursor-pointer' 
            src={assets.logo} 
            alt="Logo" 
          />
        </a>            
        
        <ul className='hidden md:flex gap-7 text-black text-xl font-extralight'>
          <li><a href="#Servicios" className='cursor-pointer hover:text-blue-600 relative group'>
            Dienstleistungen
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </a></li>
          <li><a href="#Maquinaria" className='cursor-pointer hover:text-blue-600 relative group'>
            Maschinen
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </a></li>
          <li><a href="#Quienes" className='cursor-pointer hover:text-blue-600 relative group'>
            Wer wir sind
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </a></li>
          <li><a href="#Faq" className='cursor-pointer hover:text-blue-600 relative group'>
          Häufig gestellte Fragen
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </a></li>
          
        </ul>
        
        <a href="#Contact" className='text-xl hidden md:block 
               bg-blue-500 text-white px-8 py-2 rounded-full ml-7
               transition duration-300 ease-in-out
               transform hover:scale-105 hover:bg-blue-600 
               hover:shadow-lg hover:shadow-blue-500/50
               active:scale-95'>
               Kontakt            
        </a>
        <img onClick={()=> setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-8 cursor-pointer' alt="" />


      </div>

      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0
      overflow-hidden bg-white transition-all `}>
        <div className='flex justify-end p-6 cursor-pointer'>
          
            <img onClick={()=> setshowMobileMenu(false)} src={assets.cross_icon} className='w-6 transition-transform'></img>
          
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
        font-medium'>
          <a onClick={()=> setshowMobileMenu(false)} href='#Servicios' className='px-4 py2 rounded-full
          inline-block'>Dienstleistungen</a>
          <a onClick={()=> setshowMobileMenu(false)} href='#Maquinaria' className='px-4 py2 rounded-full
          inline-block'>Maschinen</a>
          <a onClick={()=> setshowMobileMenu(false)} href='#Quienes' className='px-4 py2 rounded-full
          inline-block'>Wer wir sind</a>
          <a onClick={()=> setshowMobileMenu(false)} href='#Faq' className='px-4 py2 rounded-full
          inline-block'>Häufig gestellte Fragen</a>
        
        </ul>
      </div>
    </div>
  )
}

export default NavBar
