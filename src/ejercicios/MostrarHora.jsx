
//7. Mostrar hora en tiempo real: Crea un componente que muestre la hora actual en tiempo real. 
//Actualiza la hora cada segundo.


import { useState } from "react";


const MostrarHora = () => {

    const [hora, setHora] = useState("");

    
    

    const intervalo = setInterval(() => {
        const fechaHoy = new Date;
        console.log(fechaHoy);


    }, 1000);


    const cerrarIntervalo = () => {
        clearInterval(intervalo);
    }

    
    return(<>
    <div>
        <h2>7. Mostrar hora en tiempo real</h2>
        <button>Mostrar</button>
        <button onClick={() => {cerrarIntervalo()}}>Ocultar</button>
        <span></span>

    </div>
    </>)

}

export default MostrarHora;













