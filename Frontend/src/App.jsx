import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { Header } from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default App
