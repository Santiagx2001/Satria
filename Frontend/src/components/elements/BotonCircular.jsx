import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BotonCircular = ({src, ruta}) => {
  return (
    <button className='bg-Verde-Satria h-10 w-10 overflow-hidden rounded-full' onClick={() => ruta}>
        <img className='p-2 object-cover' src={src} alt="" />
    </button>
  )
}
