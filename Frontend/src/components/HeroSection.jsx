import React from 'react'

export const HeroSection = () => (
  <section className="relative h-screen bg-AmarilloClaro-Satria flex items-center justify-center text-center overflow-hidden">
    <div className="absolute bg-[url(/src/assets/img/fondo.jpg)] bg-cover w-9/10 h-full bg-no-repeat rounded-4xl">
    <div className='absolute text-left w-full h-full top-4/6 left-1/2'>
      <h1 className="text-6xl md:text-6xl font-Newake text-amber-400 leading-tight w-3/7">
        ULTIMA COLECCIÓN
      </h1>
      <p className="text-xl md:text-xl mb-8 text-pretty font-Poppins-regular text-AmarilloClaro-Satria md:w-3/7 xl:w-2/3">
        Una colección que no pide permiso,<span className='text-amber-400 font-bold'> solo se impone.</span>
      </p>
    </div>
    </div>
  </section>
);
