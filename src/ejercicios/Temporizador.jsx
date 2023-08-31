
//9. Temporizador: Crea un componente de React que muestre un temporizador que 
//pueda ser configurado para contar hacia abajo desde un valor dado.

import { useState } from "react";



const Temporizador = () => {

    const [tiempo, setTiempo] = useState(null);


    const actualizarIntervalo = (valor) => {
        let segundos;
        setInterval(() => {
            segundos = valor - 1;
            console.log(segundos);
        }, 1000);

    }

    return(<>
    <div>
        <h2>9. Temporizador regresivo</h2>

        <br/>
        <input placeholder="Escribe los segundos" onChange={(e) => setTiempo(e.target.value)}/>
        <button onClick={() => {actualizarIntervalo(tiempo)}}>Empezar</button>
        <button>Ocultar</button>


    </div>
    </>)

}


export default Temporizador;






