import React from "react";
import { Boton } from "../elements/BotonHeader";

export const Header = () => {
    return (
        <header className="flex justify-evenly items-center pt-8 pb-3 text-VerdeOscuro-Satria">
            <h1 className="text-5xl font-Newake cursor-default">SATRIA</h1>
            <ul className="flex gap-6 font-Poppins-Regular font-semibold">
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Quienes Somos"} />
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Productos"} />
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Encuentranos"} />
                <Boton onClick={"location.href='#quienesSomos'"} label = {"Contactanos"} />
            </ul>
        </header>
    );
}