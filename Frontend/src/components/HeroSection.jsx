import React from 'react'

export const HeroSection = () => (
  <section className="relative h-screen bg-VerdeOscuro-Satria flex items-center justify-center text-center px-4 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1713483864121-bb85ae97d2ac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxvJTIwZGUlMjByb3BhfGVufDB8fDB8fHww')" }}></div>
    <div className="absolute top-2/4  z-10 text-AmarilloClaro-Satria p-6 rounded-lg bg-Negro-Satria/85 max-w-3xl">
      <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight">
        MODA CON PROPÓSITO
      </h1>
      <p className="text-xl md:text-xl mb-8 text-pretty">
        Viste con estilo, siembra un futuro. Cada prenda Satria te conecta con el planeta.
      </p>
      <button className="bg-VerdeOscuro-Satria hover:bg-AmarilloClaro-Satria text-white hover:text-VerdeOscuro-Satria font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
        Descubre la Colección
      </button>
    </div>
  </section>
);
