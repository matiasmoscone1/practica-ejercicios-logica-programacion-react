
//1. Crear un contador usando 3 botones, agregar, restar y resetear

import { useState } from "react";
import { useContext } from 'react';
import themeContext from "./CambiaTema";


//Creando el Componente Contador
const Contador = () => {

    const tema = useContext(themeContext);

    
    //Creando el hook useState
    const [contador, setContador] = useState(0);

    //Creando funcion para que sume 1
    const sumarFunc = () => {
        setContador(contador + 1);
    };

    //Creando funcion para que reste 1
    const restarFunc = () => {
        setContador(contador - 1);
    }

    //Creando funcion para que restablesca a 0 el valor de contador
    const resetearFunc = () => {
        setContador(0);
    }

    return(
        <>
        {tema && <h1>ESTOY PROBNADO USECONTEXT</h1>}
    
        <div>
            <h2>Ejercicio 1: Contador</h2>
            {/* Botones que al clickear llaman a la funcion correspondiente */}
            <button onClick={sumarFunc}>Sumar</button>
            <button onClick={restarFunc}>Restar</button>
            <button onClick={resetearFunc}>Resetear</button>
            <br/>
            {/* Actualiza el resultado en el DOM */}
            <span>Resultado: {contador}</span>
        </div>
        </>
    )



}


export default Contador;









