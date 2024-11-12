import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../../components'
import Header from '../Header/Header'
import About from '../About/About'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import Testimonial from '../Testimonial/Testimonial'
import FAQ from '../FAQ/FAQ'
import Newsletter from '../Newsletter/Newsletter'
import Info from '../Info/Info'
import Banner from '../Banner'
const Landing = () => {
  useEffect(() => {
    window.scrollTo(0,0)
},[])
  
  
  
  return (
    <>
      <Navbar />
      <Header />
      <About />
        {/* <Work /> */}
        {/* <Skills /> */}
        <RegistrationForm />
        <Banner />

        <Testimonial />
        <FAQ />
        {/* <Footer /> */}
        <Newsletter />
        <Info />
    </>
  )
}

export default Landing