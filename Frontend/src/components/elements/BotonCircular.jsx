import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BotonCircular = ({src, ruta}) => {
  return (
    <button className='bg-radial from-Verde-Satria to-VerdeOscuro-Satria h-10 w-10 hover:scale-110 transition-all duration-500 overflow-hidden rounded-full' onClick={() => ruta}>
        <img className='p-[10px] object-cover' src={src} alt="Icono" />
    </button>  )
}
