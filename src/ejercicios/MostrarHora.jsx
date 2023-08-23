
//7. Mostrar hora en tiempo real: Crea un componente que muestre la hora actual en tiempo real. 
//Actualiza la hora cada segundo.


import { useState } from "react";


const MostrarHora = () => {

    
    let intervalo;
    let hora, minutos, segundos;
    
    const crearIntervalo = () => {
        intervalo = setInterval(() => {
            const fechaHoy = new Date;
            
            let hora = fechaHoy.getHours();
            let minutos = fechaHoy.getMinutes();
            let segundos = fechaHoy.getSeconds();
            
            console.log(fechaHoy);
            console.log(hora,minutos,segundos);

        }, 1000);
    }

    const cerrarIntervalo = () => {
        clearInterval(intervalo);
    }

    
    return(<>
    <div>
        <h2>7. Mostrar hora en tiempo real</h2>
        <button onClick={() => {crearIntervalo()}}>Mostrar</button>
        <button onClick={() => {cerrarIntervalo()}}>Ocultar</button>
        <span>{`${hora}:${minutos}:${segundos}`}</span>

    </div>
    </>)

}

export default MostrarHora;













