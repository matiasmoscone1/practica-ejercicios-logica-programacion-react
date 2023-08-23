
//7. Mostrar hora en tiempo real: Crea un componente que muestre la hora actual en tiempo real. 
//Actualiza la hora cada segundo.


import { useState, useEffect } from "react";


const MostrarHora = () => {

    
    const [intervalo, setIntervalo] = useState(null);;
    const [hora, setHora] = useState("");
    const [minutos, setMinutos] = useState("");
    const [segundos, setSegundos] = useState("");

    //let hora, minutos, segundos;
    
    const crearIntervalo = () => {
        const nuevoIntervalo = setInterval(() => {
            const fechaHoy = new Date;
            
            //let hora = fechaHoy.getHours();
            //let minutos = fechaHoy.getMinutes();
            //let segundos = fechaHoy.getSeconds();
            let nuevaHora = setHora(fechaHoy.getHours());
            let nuevoMinuto = setMinutos(fechaHoy.getMinutes());
            let nuevoSegundo = setSegundos(fechaHoy.getSeconds());
            
            console.log(fechaHoy);
            console.log(nuevaHora,nuevoMinuto,nuevoSegundo);
            

        }, 1000);

        setIntervalo(nuevoIntervalo);

    }

    const cerrarIntervalo = () => {
        clearInterval(intervalo);
    }

    useEffect(() => {
        return() => {
            if(intervalo){
                clearInterval(intervalo);
            }
        }
    },[intervalo]);

    return(<>
    <div>
        <h2>7. Mostrar hora en tiempo real</h2>
        <button onClick={() => {crearIntervalo()}}>Mostrar</button>
        <button onClick={() => {cerrarIntervalo()}}>Ocultar</button>        
        <span> </span>

    </div>
    </>)

}

export default MostrarHora;













