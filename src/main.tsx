import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import './index.css'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
  </React.StrictMode>,
)
