import { useState } from "react";
import Botones_Fin_Inicio from "./Botones_Fin_Inicio";


const Navbar = () => {

    const [flag, setFlag] = useState(false);

    const DespliegaNavbar = () => {
        console.log("desplegando navbar...");
        return(
        <div className="btn-despliega-ejercicios-container">
            <button>Ejercicio 1</button>
            <button>Ejercicio 2</button>
            <button>Ejercicio 3</button>
            <button>Ejercicio 4</button>
            <button>Ejercicio 5</button>
            <button>Ejercicio 6</button>

        </div>);
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
            </div>
            {!flag ? console.log("Flag en false") : <DespliegaNavbar />}
            <Botones_Fin_Inicio />
        </div>
        
    
    </>)



}


export default Navbar;










