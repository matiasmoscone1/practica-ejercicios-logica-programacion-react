import { useState } from "react";
import Botones_Fin_Inicio from "./Botones_Fin_Inicio";


const Navbar = () => {

    const [flag, setFlag] = useState(false);

    const DespliegaNavbar = () => {

        
        const LlamaEjercicio = () => {
            let buttons = [];
            for(let i = 1; i <= 15; i++){
                buttons.push(
                <button key={i} onClick={() => apuntaEjercicio(i)}>Ejercicio {i}</button>
                );
            }     
            
            return buttons; 
        }
        /*
        const LlamaEjercicio = () => {
            
            let buttons = "";
            for(let i = 1; i < 15; i++){
                buttons += <button onClick={() => apuntaEjercicio(i)}>Ejercicio {i}</button>;
                console.log(buttons);
            }
            
            return buttons;            
        } */


        console.log("desplegando navbar...");
        return(
        <div className="btn-despliega-ejercicios-container">
            {/* 
            <button onClick={() => apuntaEjercicio(1)}>Ejercicio 1</button>
            <button onClick={() => apuntaEjercicio(2)}>Ejercicio 2</button>
            <button onClick={() => apuntaEjercicio(3)}>Ejercicio 3</button>
            <button onClick={() => apuntaEjercicio(4)}>Ejercicio 4</button>
            <button onClick={() => apuntaEjercicio(5)}>Ejercicio 5</button>
            <button onClick={() => apuntaEjercicio(6)}>Ejercicio 6</button>
            */}

            <LlamaEjercicio />



        </div>);
    }

    const apuntaEjercicio = (n) => {
        console.log(n);
    }


    const cambiaFlag = () => {
        if(!flag){
            setFlag(true);
        }else{
            setFlag(false);
        }
    }

    return(<>
        <div className="navbar-container">
            <div className="btn-ejercicios-container">
                <button className="btn-ejercicios-navbar" onClick={() => cambiaFlag()}>Ejercicios</button>
                {!flag ? console.log("Flag en false") : <DespliegaNavbar />}
            </div>
            <Botones_Fin_Inicio />
        </div>
        
    
    </>)



}


export default Navbar;










