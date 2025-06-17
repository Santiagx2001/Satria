import react from "react";

export const Boton = ({label, parentMethod, className}) => {
    return (
        <button className="font-Poppins-Regular text-md pb-2 px-2 border-b-2 border-transparent hover:border-VerdeOscuro-Satria transition duration-300 cursor-pointer" onClick={parentMethod}>
            {label}
        </button>
    )
}