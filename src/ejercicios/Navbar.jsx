import { useState } from "react";
import Botones_Fin_Inicio from "./Botones_Fin_Inicio";
import { useRef } from "react";

const Navbar = () => {

    const [flag, setFlag] = useState(false);
    console.log(-scrollY);
    const DespliegaNavbar = () => {
        console.log("desplegando navbar...");
        return (
            <div className="btn-despliega-ejercicios-container">
                <LlamaEjercicio />
            </div>
        );
    }
    
    const LlamaEjercicio = () => {

        const ejercicioRefs = useRef([]);

        const apuntaEjercicio = (n) => {
            const ejercicioRef = ejercicioRefs.current[n - 1];
            if (ejercicioRef) {
                ejercicioRef.scrollIntoView({ behavior: "smooth" });
            }
        };


        const handleClick = (i) => {
            

            apuntaEjercicio(i);
        };

        let buttons = [];
        for (let i = 0; i <= 15; i++) {
            buttons.push(
                <button key={i} id={i} onClick={() => handleClick(i)} ref={(el) => {console.log(ejercicioRefs.current);(ejercicioRefs.current[i - 1] = el)}}>
                    Ejercicio {i}
                </button>
            );
        }
        console.log(buttons);
        return buttons;
    };

   

    const cambiaFlag = () => {
        if(!flag){
            setFlag(true);
        }else{
            setFlag(false);
        }
    }

    return (
        <div className="navbar-container">
            <div className="btn-ejercicios-container">
                <button className="btn-ejercicios-navbar" onClick={cambiaFlag}>
                    Ejercicios
                </button>
                {flag && <DespliegaNavbar />}
            </div>
            {/* Otro contenido del navbar */}
            <Botones_Fin_Inicio />
        </div>
    );


}


export default Navbar;










