import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import './index.css'
import Hero from './components/Hero.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
