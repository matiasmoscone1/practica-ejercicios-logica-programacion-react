import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);


    const sumarFunc = () => {
        setContador(contador + 1);
    };

    const restarFunc = () => {
        setContador(contador - 1);
    }

    const resetearFunc = () => {
        setContador(0);
    }

    return(
        <>
        <div>
            <h2>Ejercicio 1: Contador</h2>
            <button onClick={sumarFunc}>Sumar</button>
            <button onClick={restarFunc}>Restar</button>
            <button onClick={resetearFunc}>Resetear</button>
            <br/>
            <span>Resultado: {contador}</span>
        </div>
        </>
    )



}


export default Contador;









