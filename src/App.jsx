import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import FibraOpticaInfo from './components/FibraOpticaInfo'
import Machine from './components/Machine'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WhatsAppButton from './components/WhatsAppButton'
import EmailButton from './components/EmailButton'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Services/>
      <About/>
      <FibraOpticaInfo/>
      <Machine/>
      <Faq />
      <Footer/>
      <WhatsAppButton/>
      
    </div>
  )
}

export default App
