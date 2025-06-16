import React from 'react'

export const QuienesSomos = () => (
  <section className="flex h-screen gap-5 justify-center items-center">
      <div className='flex flex-col w-2/5 h-full justify-center'>
        <h2 className="text-4xl font-Newake mb-6 text-VerdeOscuro-Satria pl-3 border-l-10 rounded- border-VerdeOscuro-Satria">QUIENES SOMOS</h2>
        <p className="text-xl font-Poppins-Light text-Negro-Satria leading-relaxed mb-8">
          En SATRIA, creemos que la moda puede ser una fuerza para el bien. Nos dedicamos a crear prendas que no solo te empoderan con estilo, sino que también te invitan a ser parte activa de la sostenibilidad. Cada prenda lleva consigo la promesa de un futuro más verde.
        </p>
      </div>
      <div className="flex flex-col w-2/5 gap-8">
        <div className="bg-[url('/src/assets/img/QuienesSomos1.png')] bg-cover  rounded-xl shadow-md">
          <div className='bg-VerdeOscuro-Satria/70 p-10 rounded-xl min-w-full'>
            <h3 className="text-2xl text-amber-400 font-Newake text-satria-dark-green">ESTILO AUTENTICO</h3>
            <p className="text-md text-AmarilloClaro-Satria font-Poppins-Regular font-bold ">Diseños modernos y atemporales que reflejan tu personalidad única.</p>
          </div>
        </div>
        <div className="bg-[url('/src/assets/img/QuienesSomos2.jpg')] bg-cover rounded-xl shadow-md">
          <div className='bg-amber-300/70 p-10 rounded-xl min-w-full'>
            <h3 className="text-2xl text-VerdeOscuro-Satria font-Newake  text-satria-dark-green">ESTILO AUTENTICO</h3>
            <p className="text-md text-VerdeOscuro-Satria font-Poppins-Regular font-bold ">Diseños modernos y atemporales que reflejan tu personalidad única.</p>
          </div>
        </div>
      </div>
  </section>
);