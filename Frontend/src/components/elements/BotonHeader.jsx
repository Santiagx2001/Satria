import React from "react"

export const Boton = ({label, ruta}) => {
    return (
        <button className="font-Poppins-Regular text-sm py-2 px-5 mx-2 rounded-full bg-gradient-to-tl from-transparent to-transparent hover:from-VerdeOscuro-Satria hover:to-Verde-Satria  hover:shadow-lg/20 hover:text-AmarilloClaro-Satria hover:scale-105 transition duration-500 cursor-pointer" onClick={() => ruta}>
            {label}
        </button>
    )
}