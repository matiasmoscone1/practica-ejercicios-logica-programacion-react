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

        console.log(ejercicioRefs);
        const apuntaEjercicio = (n) => {
            // Encuentra la referencia al elemento del ejercicio correspondiente
            const ejercicioRef = ejercicioRefs.current[n - 1];
            // Si se encuentra el ejercicio, desplázate hasta él
            if (ejercicioRef) {
                const nuevaRef = ejercicioRef * (-scrollY % 15);
                nuevaRef.scrollIntoView({ behavior: "smooth" });
                console.log(-scrollY);
                return(window.scrollTo({
                    top: nuevaRef,
                    behavior: "smooth"
                }));       
            }
        };


        const handleClick = (i) => {
            
            console.log(ejercicioRefs);
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










