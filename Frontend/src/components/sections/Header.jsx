import React from "react";
import { Boton } from "../elements/BotonHeader";
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const nav = useNavigate()
    return (
        <header className="flex justify-evenly items-center w-screen pt-8 pb-3 text-VerdeOscuro-Satria">
                    <div className="max-w-40" >
                        <img src="/src/assets/img/Recurso2.png" alt="" />
                    </div>

                    <ul className="flex justify-around font-Poppins-Regular font-semibold border-[1px] rounded-full border-Negro-Satria/30 p-2">
                        <Boton label = {"Home"} ruta={"#"}/>
                        <Boton label = {"Catálogo"} ruta={"#"}/>
                        <Boton label = {"Quíenes somos"} ruta={"#"}/>
                        <Boton label = {"Sostenibilidad"} ruta={"#"}/>
                        <Boton label = {"Políticas"} ruta={"#"}/>
                    </ul>
        </header>
    );
}