import React from 'react'

export const AboutSection = () => (
  <section className="py-20 px-8 bg-satria-light-yellow text-satria-grayish-black">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-satria-very-dark-green">Nuestra Misión</h2>
      <p className="text-xl leading-relaxed mb-8">
        En SATRIA, creemos que la moda puede ser una fuerza para el bien. Nos dedicamos a crear prendas que no solo te empoderan con estilo, sino que también te invitan a ser parte activa de la sostenibilidad. Cada prenda lleva consigo la promesa de un futuro más verde.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-satria-dark-green">Estilo Auténtico</h3>
          <p className="text-lg">Diseños modernos y atemporales que reflejan tu personalidad única.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-satria-dark-green">Compromiso Ambiental</h3>
          <p className="text-lg">Fabricación consciente y la promesa de una semilla en cada etiqueta.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-satria-dark-green">Empoderamiento Personal</h3>
          <p className="text-lg">Viste con conciencia, contribuye al cambio y siembra un futuro mejor.</p>
        </div>
      </div>
    </div>
  </section>
);