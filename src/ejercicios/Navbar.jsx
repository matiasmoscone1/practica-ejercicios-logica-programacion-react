import { useState } from "react";
import Botones_Fin_Inicio from "./Botones_Fin_Inicio";


const Navbar = () => {

    const [flag, setFlag] = useState(false);

    const DespliegaNavbar = () => {
        console.log("desplegando navbar...");
        return (
            <div className="btn-despliega-ejercicios-container">
                <LlamaEjercicio />
            </div>
        );
    }

 
    const LlamaEjercicio = () => {
        let buttons = [];
        for(let i = 1; i <= 15; i++){
            buttons.push(
            <button key={i} id={`ejercicio-${i}`} onClick={() => apuntaEjercicio(i)}>Ejercicio {i}</button>
            );
        }     
        
        return buttons; 
    }


    const apuntaEjercicio = (n) => {
        console.log(n);
        const ejercicio = document.getElementById(`ejercicio-${n}`);
        // Si se encuentra el ejercicio, desplázate hasta él
        console.log(ejercicio);
        if (ejercicio) {
            ejercicio.scrollIntoView({ behavior: "smooth" });
        }
    }


    const cambiaFlag = () => {
        if(!flag){
            setFlag(true);
        }else{
            setFlag(false);
        }
    }

    return (
        <>
            <div className="navbar-container">
                <div className="btn-ejercicios-container">
                    <button className="btn-ejercicios-navbar" onClick={cambiaFlag}>Ejercicios</button>
                    {flag && <DespliegaNavbar />}
                </div>
                {/* Otro contenido del navbar */}
            </div>
        </>
    );
/*
    return(<>
        <div className="navbar-container">
            <div className="btn-ejercicios-container">
                <button className="btn-ejercicios-navbar" onClick={() => cambiaFlag()}>Ejercicios</button>
                {!flag ? console.log("Flag en false") : <DespliegaNavbar />}
            </div>
            <Botones_Fin_Inicio />
        </div>
        
    
    </>)
*/


}


export default Navbar;










