import React from 'react'

export const QuienesSomos = () => (
  <section className="flex h-screen gap-5 justify-center items-center">
      <div className='flex flex-col w-2/5 h-full justify-center'>
        <h2 className="text-4xl font-Newake mb-6 text-VerdeOscuro-Satria pl-3 border-l-10 rounded- border-VerdeOscuro-Satria">QUIENES SOMOS</h2>
        <p className="text-xl font-Poppins-Light text-VerdeOscuro-Satria leading-relaxed mb-8">
          En SATRIA, creemos que la moda puede ser una fuerza para el bien. Nos dedicamos a crear prendas que no solo te empoderan con estilo, sino que también te invitan a ser parte activa de la sostenibilidad. Cada prenda lleva consigo la promesa de un futuro más verde.
        </p>
      </div>
      <div className="flex flex-col w-2/5 gap-8">
        <div className="p-6 bg- rounded-xl shadow-md">
          <h3 className="text-2xl text-amber-400 font-Newake mb-3 text-satria-dark-green">Estilo Auténtico</h3>
          <p className="text-md text-amber-400 font-Poppins-Regular font-semibold ">Diseños modernos y atemporales que reflejan tu personalidad única.</p>
        </div>
        <div className="p-6 bg- rounded-xl shadow-md">
          <h3 className="text-2xl font-Newake mb-3 text-satria-dark-green">Compromiso Ambiental</h3>
          <p className="text-md font-Poppins-Regular font-semibold">Fabricación consciente y la promesa de una semilla en cada etiqueta.</p>
        </div>
      </div>
  </section>
);