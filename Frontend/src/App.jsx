import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from 'react-router-dom'
import { Banner } from './components/sections/Banner'
import { QuienesSomos } from './components/sections/QuienesSomos'
import { Header } from './components/sections/Header'
import { Productos } from './components/sections/Productos'


function App() {

  return (
    <div className='bg-AmarilloClaro-Satria'>
      <Header />
      <Banner />
      <QuienesSomos />
      <Productos />
    </div>
  )
}

export default App
