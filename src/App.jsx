import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/layout/Footer'
import NET from 'vanta/src/vanta.net'
import netSplash from './assets/net-splash-ss.png'
import BackToTopButton from './components/common/BackToTopButton'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // useEffect(() => {
  //   NET({
  //     el: "#vanta",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     color: 0xfa6a8b,
  //     backgroundColor: 0xe0914,
  //     points: 7.00,
  //     maxDistance: 15.00,
  //     spacing: 18.00
  //   })
  // }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  return (
    <div className="app bg-black">
      <Navbar />
      {/* <div className="absolute top-0 left-0 min-h-screen w-full z-0" id="vanta"></div> */}
      <img src={netSplash} className="absolute top-0 left-0 h-screen w-full z-0 object-cover" />
      <div className="relative z-10 bg-gradient-to-t from-black to-black-10">
        <Hero />
      </div>
      
      {/* <Navbar />
      <div className="min-h-screen bg-black">
        <Hero />
      </div> */}

      <div className="min-h-screen">
      <About />
      </div>
      <BackToTopButton />
      <div className="min-h-screen">
      <Experience />
      <Projects />
      <Contact />
      </div>
    </div>
  )
}

export default App
