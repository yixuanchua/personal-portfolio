import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Contact from './pages/contact'
import NET from 'vanta/src/vanta.net'
import netSplash from './assets/net-splash-ss.png'

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

  return (
    <div className="app bg-black">
      <Navbar />
      {/* <div className="absolute top-0 left-0 min-h-screen w-full z-0" id="vanta"></div> */}
      <img src={netSplash} className="absolute top-0 left-0 min-h-screen w-full z-0" />
      <div className="relative z-10 bg-gradient-to-t from-black to-black-10">
        <Home />
      </div>
      
      {/* <Navbar />
      <div className="min-h-screen bg-black">
        <Home />
      </div> */}

      <div className="min-h-screen">
      <About />
      </div>
      <div className="min-h-screen">
      <Experience />
      <Projects />
      <Contact />
      </div>
    </div>
  )
}

export default App
