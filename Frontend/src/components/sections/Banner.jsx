import React from 'react'

export const Banner = () => (
  <section className="relative h-screen py-3 flex items-center justify-center text-center overflow-hidden">
    <div className='relative flex justify-center w-9/10 h-full items-center rounded-4xl hover:scale-102 z-0 overflow-hidden transition-transform duration-500'>
      <div className="absolute bg-[url(/src/assets/img/fondo.jpg)] bg-cover w-full h-full hover:scale-108 ease-in-out bg-no-repeat rounded-4xl transition-transform duration-500 " />
    </div>
      <div className='absolute text-left w-max top-4/6 left-1/2'>
        <h1 className="text-6xl md:text-6xl font-Newake text-amber-400 leading-tight cursor-default">
          ULTIMA COLECCIÓN
        </h1>
        <p className="text-xl md:text-xl text-pretty font-Poppins-regular text-AmarilloClaro-Satria cursor-default">
          Una colección que no pide permiso,<span className='text-amber-400 font-bold'> solo se impone.</span>
        </p>
      </div>
    
  </section>
);
