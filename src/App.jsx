import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-black to-white">
      <Home />
      <About />
      <Experience />
      </div>
      <Projects />
      <Contact />
    </div>
  )
}

export default App
