

//3. Contador de clics en varios botones: Crea varios botones en un componente. Cada vez que 
//el usuario haga clic en uno de los botones, muestra cuántas veces se ha clickeado 
//ese botón en particular.

import { useState } from "react";

//Creando componente
const ContadorClicks = () => {

    //Creando estados iniciales para cada boton
    const [boton1, setBoton1] = useState(0);
    const [boton2, setBoton2] = useState(0);
    const [boton3, setBoton3] = useState(0);

    //Creando funciones respectivas para cada boton
    const clickBoton1 = () => {
        setBoton1(boton1 + 1);
    }
    const clickBoton2 = () => {
        setBoton2(boton2 + 1);
    }
    const clickBoton3 = () => {
        setBoton3(boton3 + 1);
    }


    return(
        <>
        <div>
            <h2>Ejercicio 3: Contador clicks</h2>
            <br/>
            {/* Renderizando los botones y actualizandolos cada vez q le hacen
            //click, llama a la funcion respectiva de cada boton*/}
            <button onClick={clickBoton1}>boton1: {boton1}</button>
            <button onClick={clickBoton2}>boton2: {boton2}</button>
            <button onClick={clickBoton3}>boton3: {boton3}</button>

        </div>
        </>
    )


}

//Exporta por defecto el componente
export default ContadorClicks;


