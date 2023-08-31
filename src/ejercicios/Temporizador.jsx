
//9. Temporizador: Crea un componente de React que muestre un temporizador que 
//pueda ser configurado para contar hacia abajo desde un valor dado.

import { useState } from "react";



const Temporizador = () => {

    const [tiempo, setTiempo] = useState(null);
    const [intervalo, setIntervalo] = useState(null);


    const modificarFormato = (num) => {

        if(num < 10){
            return(`0${num}`);
        }else{
            return(num);
        }
    }


    const actualizarIntervalo = (valor) => {

        setIntervalo(setInterval(() => {
            valor = valor - 1;

            let hora = Math.floor(valor / 3600);
            let minutos = Math.floor((valor % 3600) / 60);
            let segundos = valor % 60;



            console.log(`${modificarFormato(hora)}:${modificarFormato(minutos)}:${modificarFormato(segundos)}`);

            //console.log(valor);
        }, 1000));

    }

    const frenarIntervalo = () => {
        clearInterval(intervalo);
    }

    return(<>
    <div>
        <h2>9. Temporizador regresivo</h2>

        <br/>
        <input placeholder="Escribe los segundos" onChange={(e) => setTiempo(e.target.value)}/>
        <button onClick={() => {actualizarIntervalo(tiempo)}}>Empezar</button>
        <button onClick={() => {frenarIntervalo(intervalo)}}>Ocultar</button>


    </div>
    </>)

}


export default Temporizador;






