import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Banner } from './components/Banner'
import { QuienesSomos } from './components/QuienesSomos'
import { Header } from './components/Header'
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div className='bg-AmarilloClaro-Satria'>
      <Header />
      <Banner />
      <QuienesSomos />
    </div>
  )
}

export default App
