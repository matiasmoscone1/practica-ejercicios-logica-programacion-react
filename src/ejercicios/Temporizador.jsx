
//9. Temporizador: Crea un componente de React que muestre un temporizador que 
//pueda ser configurado para contar hacia abajo desde un valor dado.

import { useEffect } from "react";
import { useState } from "react";



const Temporizador = () => {

    const [tiempo, setTiempo] = useState(null);
    const [intervalo, setIntervalo] = useState(null);
    const [hora, setHora] = useState("");
    const [minutos, setMinutos] = useState("");
    const [segundos, setSegundos] = useState("");
    const [flag, setFlag] = useState(true);

    const modificarFormato = (num) => {

        if(num < 10){
            return(`0${num}`);
        }else{
            return(num);
        }
    }

    useEffect(() => {
        if(hora === 0 && minutos === 0 && segundos === 0){
            clearInterval(intervalo);
            setFlag(false);
            //console.log("Cuenta regresiva finalizada");
        }

    }, [hora, minutos, segundos, intervalo]);

    const actualizarIntervalo = (valor) => {

        setIntervalo(setInterval(() => {
            valor = valor - 1;

            setFlag(true);

            let nuevaHora = Math.floor(valor / 3600);
            let nuevosMinutos = Math.floor((valor % 3600) / 60);
            let nuevosSegundos = valor % 60;

            setHora(nuevaHora);
            setMinutos(nuevosMinutos);
            setSegundos(nuevosSegundos);

            //console.log(`${modificarFormato(hora)}:${modificarFormato(minutos)}:${modificarFormato(segundos)}`);
            
            //console.log(valor);
        }, 1000));

    }

    const frenarIntervalo = () => {
        clearInterval(intervalo);
    }

    const funcionRetornadora = () => {
        if(!flag){
            return(<div>Cuenta regresiva ha finalizado!!!</div>);
        }
    }

    return(<>
    <div>
        <h2>9. Temporizador regresivo</h2>

        <br/>
        <input placeholder="Escribe los segundos" onChange={(e) => setTiempo(e.target.value)}/>
        <button onClick={() => {actualizarIntervalo(tiempo)}}>Empezar</button>
        <button onClick={() => {frenarIntervalo(intervalo)}}>Ocultar</button>
        <div>{`${modificarFormato(hora)}:${modificarFormato(minutos)}:${modificarFormato(segundos)}`}</div>
        {funcionRetornadora()}

    </div>
    </>)

}


export default Temporizador;






