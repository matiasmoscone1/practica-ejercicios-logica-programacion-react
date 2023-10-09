
//26. Reduce para Sumar: Utiliza la función reduce para calcular la suma de todos los 
//números en un array.

import { useState } from "react";


const SumaReduce = () => {

    const arrayNumeros = [2, 5, 8, 10, 22, 30];

    const [resultado, setResultado] = useState(0);

    const sumaReduciendo = (arr) => {
        const arrayReducido = arr.reduce((a, b) => a + b);
        setResultado(arrayReducido);
    }

    

    return(<>
    <div>
        <h2>26. Suma de array utilizando reduce</h2>
        {`[${arrayNumeros.join(",")}]`}
        <br/><br/>
        <button onClick={() => sumaReduciendo(arrayNumeros)}>Sumar Reduciendo</button>
        {resultado ? resultado : ""}
    </div>
    </>)

}

export default SumaReduce;
