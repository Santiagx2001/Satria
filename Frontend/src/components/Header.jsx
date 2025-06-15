import React from "react";
import { Boton } from "./Boton";

export const Header = () => {
    return (
        <header className="flex justify-evenly items-center py-7 bg-AmarilloClaro-Satria text-VerdeOscuro-Satria">
            <h1 className="text-5xl font-Newake">SATRIA</h1>
            <ul className="flex gap-6 font-Poppins-Regular font-semibold">
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Quienes Somos"} />
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Productos"} />
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Encuentranos"} />
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Contactanos"} />
            </ul>
        </header>
    );
}