import React from "react"

export const Boton = ({label, ruta}) => {
    return (
        <button className="font-Poppins-Regular text-sm py-2 px-5 rounded-full hover:Color-boton hover:shadow-lg/20 hover:text-AmarilloClaro-Satria transition duration-500 cursor-pointer" onClick={() => ruta}>
            {label}
        </button>
    )
}