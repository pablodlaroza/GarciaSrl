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
import TestMotion from './components/Test'

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
      <TestMotion/>
    </div>
  )
}

export default App
