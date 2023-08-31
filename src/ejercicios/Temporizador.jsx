
//9. Temporizador: Crea un componente de React que muestre un temporizador que 
//pueda ser configurado para contar hacia abajo desde un valor dado.

import { useState } from "react";



const Temporizador = () => {

    const [tiempo, setTiempo] = useState(null);
    const [intervalo, setIntervalo] = useState(null);

    const actualizarIntervalo = (valor) => {
        
        let hora = valor / 3600;

        let parteDecimalHoras = hora - Math.floor(hora);


        let minutos = valor + parteDecimalHoras / 60;


        console.log(Math.floor(hora));
        console.log(minutos);


        setIntervalo(setInterval(() => {
            valor = valor - 1;
            console.log(valor);
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






