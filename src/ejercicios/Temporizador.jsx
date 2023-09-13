
//9. Temporizador: Crea un componente de React que muestre un temporizador que 
//pueda ser configurado para contar hacia abajo desde un valor dado.

import { useEffect } from "react";
import { useState } from "react";


//creando componente
const Temporizador = () => {

    //creando estados del componente
    const [tiempo, setTiempo] = useState(null);
    const [intervalo, setIntervalo] = useState(null);
    const [hora, setHora] = useState("");
    const [minutos, setMinutos] = useState("");
    const [segundos, setSegundos] = useState("");
    const [flag, setFlag] = useState(true);

    //funcion que modifica el formato del numero, recibe un numero por parametro
    //si es meneor a 10, se le agrega un 0 adelante, si no, devuelve el numero
    const modificarFormato = (num) => {
        if(num < 10){
            return(`0${num}`);
        }else{
            return(num);
        }
    }


    //useEffect que determina si el temporizador llego a 0, borra el intervalo y setea la 
    //flag en false, se ejecuta cada vez q cambia alguna de las variables "hora", "minutos", "segundos", "intervalo"
    useEffect(() => {
        if(hora === 0 && minutos === 0 && segundos === 0){
            clearInterval(intervalo);
            setFlag(false);
            //console.log("Cuenta regresiva finalizada");
        }

    }, [hora, minutos, segundos, intervalo]);

    
    //cuando se hace click en empezar, se le pasa por parametro a la funcion actualizarIntervalo
    //el tiempo en segundos
    const actualizarIntervalo = (valor) => {

        //setea el intervalo, con un setInterval que se actualiza cada 1 segundo
        setIntervalo(setInterval(() => {
            //descuenta por cada segundo que pasa, un segundo del tiempo pasado por parametro
            valor = valor - 1;

            //pone la bandera en true
            setFlag(true);

            //crea nuevas variables que contendran la hora, minutos y segundos con el nuevo valor
            let nuevaHora = Math.floor(valor / 3600);
            let nuevosMinutos = Math.floor((valor % 3600) / 60);
            let nuevosSegundos = valor % 60;

            //setea las variables hora, minutos, segundos
            setHora(nuevaHora);
            setMinutos(nuevosMinutos);
            setSegundos(nuevosSegundos);

            //console.log(`${modificarFormato(hora)}:${modificarFormato(minutos)}:${modificarFormato(segundos)}`);
            
            //console.log(valor);
        }, 1000));

    }

    //funcion que borra el intervalo
    const frenarIntervalo = () => {
        clearInterval(intervalo);
    }

    //si la bandera esta en false (despues de que haya temrinado la cuenta regresiva),
    //retorna un mensaje diciendo que la cuenta regresiva finalizo
    const funcionRetornadora = () => {
        if(!flag){
            return(<div>Cuenta regresiva ha finalizado!!!</div>);
        }
    }

    return(<>
    <div>
        <h2>9. Temporizador regresivo</h2>

        <br/>
        {/* Input donde cada que se escribe el tiempo en segundos, se va guardando en la variable
        tiempo*/}
        <input placeholder="Escribe los segundos" onChange={(e) => setTiempo(e.target.value)}/>
        {/* botones empezar y ocultar que llaman a sus respectivas funciones con sus parametros*/}
        <button onClick={() => {actualizarIntervalo(tiempo)}}>Empezar</button>
        <button onClick={() => {frenarIntervalo(intervalo)}}>Ocultar</button>
        {/* Muestra en el DOM, con un formato limpio la cuenta regresiva */}
        <div>{`${modificarFormato(hora)}:${modificarFormato(minutos)}:${modificarFormato(segundos)}`}</div>
        {funcionRetornadora()}

    </div>
    </>)

}


export default Temporizador;






