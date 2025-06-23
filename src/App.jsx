import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/layout/Footer'
// import netSplash from './assets/net-splash-ss.png'
import BackToTopButton from './components/common/BackToTopButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  return (
    <div className="app bg-black">
      <Navbar />
      {/* {isMobile ? (
        <img src={netSplash} className="absolute top-0 left-0 h-screen w-full z-0 object-cover" />
      ) : (
        <div ref={vantaRef} className="absolute top-0 left-0 min-h-screen w-full z-0" id="vanta"></div>
      )} */}
      <Hero />
      <About />
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
