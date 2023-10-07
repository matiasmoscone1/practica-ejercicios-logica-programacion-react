
//23. Buscar Elemento Máximo/Mínimo: Escribe una función que encuentre el 
//elemento máximo o mínimo en un array de números.

import { useState } from "react";

const MinimoMaximo = () => {

    const array = [2, 6, 47, 32, 53, 14, 22, 27, 3, 19];

    const [resultado, setResultado] = useState(0);


    const obtenerMaximo = (arr) => {
        const max = arr.reduce((a,b) => Math.max(a, b), arr[0]);
        setResultado(max);        
        //console.log(resultado);
    }

    const obtenerMinimo = (arr) => {
        const min = arr.reduce((a,b) => Math.min(a,b), arr[0]);
        setResultado(min);
        //console.log(resultado);
    }

    return(<>
    <div>
        <h2>23. Busca el minimo o maximo del array</h2>
        {`[${array.join(",")}]`}
        <br/><br/>
        <button onClick={() => obtenerMaximo(array)}>Maximo</button>{" "}
        <button onClick={() => obtenerMinimo(array)}>Minimo</button>{" "}
        {resultado}

    </div>
    </>)

}


export default MinimoMaximo;



