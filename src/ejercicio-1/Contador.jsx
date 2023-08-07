import { useState } from "react";


//Creando el Componente Contador
const Contador = () => {

    //Creando el hook useState
    const [contador, setContador] = useState(0);

    //Creando funcion para que sume 1
    const sumarFunc = () => {
        setContador(contador + 1);
    };

    //Creando funcion para que reste 1
    const restarFunc = () => {
        setContador(contador - 1);
    }

    //Creando funcion para que restablesca a 0 el valor de contador
    const resetearFunc = () => {
        setContador(0);
    }

    return(
        <>
        <div>
            <h2>Ejercicio 1: Contador</h2>
            {/* Botones que al clickear llaman a la funcion correspondiente */}
            <button onClick={sumarFunc}>Sumar</button>
            <button onClick={restarFunc}>Restar</button>
            <button onClick={resetearFunc}>Resetear</button>
            <br/>
            {/* Actualiza el resultado en el DOM */}
            <span>Resultado: {contador}</span>
        </div>
        </>
    )



}


export default Contador;









