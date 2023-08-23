
//7. Mostrar hora en tiempo real: Crea un componente que muestre la hora actual en tiempo real. 
//Actualiza la hora cada segundo.

//importando hooks
import { useState, useEffect } from "react";

//creando componente
const MostrarHora = () => {

    //Creando variables de estado
    const [intervalo, setIntervalo] = useState(null);;
    const [hora, setHora] = useState("horas");
    const [minutos, setMinutos] = useState("minutos");
    const [segundos, setSegundos] = useState("segundos");

    //funcion que modifica la interfaz para que quede formato de hora 00:00:00
    const formatoDosDigitos = (numero) => {
        return numero < 10 ? `0${numero}` : numero;
    }

    //creando funcion que contiene un intervalo
    const crearIntervalo = () => {
        //creando intervalo que se actualiza cada 1 segundo
        const nuevoIntervalo = setInterval(() => {
            //devuelve la fecha actual
            const fechaHoy = new Date;

            //crea variables nuevas que contienen hora, minutos y segundos de la fecha actual
            const nuevaHora = fechaHoy.getHours();
            const nuevoMinuto = fechaHoy.getMinutes();
            const nuevoSegundo = fechaHoy.getSeconds();
            //setea la hora minutos y segundos de acuerdo a las nuevas variables asignadas y
            //tambien las modifica agregandole el 0 adelante si son menores a 10 para respetar
            //el formato 00:00:00
            setHora(formatoDosDigitos(nuevaHora));
            setMinutos(formatoDosDigitos(nuevoMinuto));
            setSegundos(formatoDosDigitos(nuevoSegundo));


            //console.log(fechaHoy);
            //console.log(hora,minutos,segundos);
            
        }, 1000);

        //Actualiza la variable intervalo, para despues poder limpiarlo
        setIntervalo(nuevoIntervalo);
    }

    //funcion que detiene el intervalo, vuelve a las variables de estado hora minuto y segundo
    //a su estado inicial
    const cerrarIntervalo = () => {
        setHora("horas");
        setMinutos("minutos");
        setSegundos("segundos");
        //detiene el intervalo creado
        clearInterval(intervalo);
    }

    //hook que verifica si existe intervalo, cierra el intervalo.
    useEffect(() => {
        return() => {
            if(intervalo){
                clearInterval(intervalo);
            }
        }
        //cada vez que la variable intervalo cambie, se ejecuta este hook
    },[intervalo]);

    

    
    return(<>
    <div>
        <h2>7. Mostrar hora en tiempo real</h2>
        {/* cuando se presiona click en cada boton, se le asigna mediante callback su funcion
        correspondiente*/} 
        <button onClick={() => {crearIntervalo()}}>Mostrar</button>
        <button onClick={() => {cerrarIntervalo()}}>Ocultar</button>       
        {/* muestra en pantalla la hora exacta */} 
        <span>{`${hora}:${minutos}:${segundos}`}</span>

    </div>
    </>)

}

export default MostrarHora;













