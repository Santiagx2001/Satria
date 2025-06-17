import React from 'react';
import { CartaProducto } from '../elements/cartaProducto';

export const Productos = () => {
    return (
        <section className='h-screen'>
            <div className='flex flex-col items-center w-full '>
                <h2 className='font-Newake text-5xl mb-3 text-VerdeOscuro-Satria'>NUESTROS PRODUCTOS</h2>
                <p className='font-Poppins-Regular text-Negro-Satria ont-bold text-xl'>Conoce nuestras prendas de gran calidad</p>
            </div>
            <div className='h-[80%]'>
                <CartaProducto 
                    imagen="/src/assets/img/carta1.jpg"
                    contextoImagen="Imagten modelo ropa"
                    nombre="Camiseta TB"
                    descripcion="descripción"
                    precio="$50.000"
                />
            </div>
        </section>
    )
}
