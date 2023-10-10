
//26. Reduce para Sumar: Utiliza la función reduce para calcular la suma de todos los 
//números en un array.

import { useState } from "react";

//creando componente
const SumaReduce = () => {

    //creando array inicial de numeros
    const arrayNumeros = [2, 5, 8, 10, 22, 30];

    //creando variable de estado resultado
    const [resultado, setResultado] = useState(0);

    //creando funcion reductora, toma el array por parametro
    const sumaReduciendo = (arr) => {
        //crea un nuevo array reducido con reduce, el valor actual es el b y a el acumulador
        const arrayReducido = arr.reduce((a, b) => a + b);
        //setea en la variable de estado el nuevo array reducido
        setResultado(arrayReducido);
    }

    

    return(<>
    <div>
        <h2>26. Suma de array utilizando reduce</h2>
        {`[${arrayNumeros.join(",")}]`}
        <br/><br/>
        <button onClick={() => sumaReduciendo(arrayNumeros)}>Sumar Reduciendo</button>{" "}
        <button onClick={() => setResultado(0)}>Limpiar</button>{" "}
        {resultado ? resultado : ""}
    </div>
    </>)

}

export default SumaReduce;
