import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);


    const sumarFunc = () => {
        contador ++;
    };

    const restarFunc = () => {
        contador --;
    }


    return(
        <>
        <div>
            <h2>Contador</h2>
            <button onClick={sumarFunc}>Agregar</button>
            <button onClick={restarFunc}>Restar</button>
            <br/>
            <span>Resultado: </span>
        </div>
        </>
    )



}


export default Contador;









