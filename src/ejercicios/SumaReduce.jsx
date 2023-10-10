
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
        {/* muestra array inicial en pantalla */}
        {`[${arrayNumeros.join(",")}]`}
        <br/><br/>
        {/* boton de suma, escucha el evento click y llama a la funcion sumadora y le 
        pasa por parametro el array inicial. Boton limpiar setea nuevamente a 0 el valor de 
        la variable de estado */}
        <button onClick={() => sumaReduciendo(arrayNumeros)}>Sumar Reduciendo</button>{" "}
        <button onClick={() => setResultado(0)}>Limpiar</button>{" "}
        {/* operador ternario donde si existe resultado lo muestra en pantalla sino una cadena vacia */}
        {resultado ? resultado : ""}
    </div>
    </>)

}

export default SumaReduce;
