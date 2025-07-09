import React from "react";

export const CartaProducto = ({imagen, contextoImagen, nombre, precio}) => {
    return (
    <div className="bg-AmarilloClaro-Satria rounded-2xl shadow-2xl w-[20%] overflow-hidden h-[90%]">
        <div className="h-[80%] overflow-hidden">
            <img src={imagen} alt={contextoImagen} className="w-full h-full object-cover"/>
        </div>
        <div className="mt-2 h-[20%] ">
            <h4 className="font-Poppins-Bold text-Verde-Satria text-xl">{nombre}</h4>
            <p className="align-bottom">{precio}</p>
        </div>
    </div>
    )
}