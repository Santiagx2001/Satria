import React from "react";

export const Header = () => {
    return (
        <header className="flex justify-evenly items-center py-4 bg-VerdeOscuro-Satria text-AmarilloClaro-Satria">
            <h1 className="text-4xl font-black">Satria</h1>
            <ul className="flex gap-5">
                <button class="boton"><li>Inicio</li></button>
                <button class="boton"><li>Sobre Nosotros</li></button>
                <button class="boton"><li>Productos</li></button>
                <button class="boton"><li>Contactanos</li></button>
            </ul>
        </header>
    );
}