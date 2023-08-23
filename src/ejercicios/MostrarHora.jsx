
//7. Mostrar hora en tiempo real: Crea un componente que muestre la hora actual en tiempo real. 
//Actualiza la hora cada segundo.


import { useState, useEffect } from "react";


const MostrarHora = () => {

    
    const [intervalo, setIntervalo] = useState(null);;
    const [hora, setHora] = useState("horas");
    const [minutos, setMinutos] = useState("minutos");
    const [segundos, setSegundos] = useState("segundos");

    //let hora, minutos, segundos;
    
    const formatoDosDigitos = (numero) => {
        return numero < 10 ? `0${numero}` : numero;
    }

    const crearIntervalo = () => {
        const nuevoIntervalo = setInterval(() => {
            const fechaHoy = new Date;
            
            //let hora = fechaHoy.getHours();
            //let minutos = fechaHoy.getMinutes();
            //let segundos = fechaHoy.getSeconds();
            const nuevaHora = fechaHoy.getHours();
            const nuevoMinuto = fechaHoy.getMinutes();
            const nuevoSegundo = fechaHoy.getSeconds();
            setHora(formatoDosDigitos(nuevaHora));
            setMinutos(formatoDosDigitos(nuevoMinuto));
            setSegundos(formatoDosDigitos(nuevoSegundo));


            console.log(fechaHoy);
            console.log(hora,minutos,segundos);
            
        }, 1000);

        setIntervalo(nuevoIntervalo);
    }

    const cerrarIntervalo = () => {
        setHora("horas");
        setMinutos("minutos");
        setSegundos("segundos");
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
        <span>{`${hora}:${minutos}:${segundos}`}</span>

    </div>
    </>)

}

export default MostrarHora;













