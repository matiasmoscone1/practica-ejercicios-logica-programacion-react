
//23. Buscar Elemento Máximo/Mínimo: Escribe una función que encuentre el 
//elemento máximo o mínimo en un array de números.

import { useState } from "react";

//creando componente
const MinimoMaximo = () => {

    //array inicial de numeros
    const array = [2, 6, 47, 32, 53, 14, 22, 27, 3, 19];

    //creando variable de estado donde almacenara el numero maximo o minimo
    const [resultado, setResultado] = useState(0);


    //creando funcion que le pasa por parametro el array de numeros
    const obtenerMaximo = (arr) => {
        //obtiene el maximo a traves de reduce
        const max = arr.reduce((a,b) => Math.max(a, b), arr[0]);
        //almacena el numero maximo en la variable de estado
        setResultado(max);        
        //console.log(resultado);
    }

    //creando funcion que se le pasa por parametro el array inicial de numeros
    const obtenerMinimo = (arr) => {
        //obtiene el minimo a traves de la funcion reduce y como valor inicial, da el primer 
        //lugar del array
        const min = arr.reduce((a,b) => Math.min(a,b), arr[0]);
        //setea el resultado en la variable de estado
        setResultado(min);
        //console.log(resultado);
    }

    return(<>
    <div>
        <h2>23. Busca el minimo o maximo del array</h2>
        {/* Muestra el array de numeros en pantalla */}
        {`[${array.join(",")}]`}
        <br/><br/>
        {/* Crea boton minimo y maximo y se le pasa la funcion correspondiente con el array de 
        //numeros por parametro */}
        <button onClick={() => obtenerMaximo(array)}>Maximo</button>{" "}
        <button onClick={() => obtenerMinimo(array)}>Minimo</button>{" "}
        {/* Muestra el resultado en pantall */}
        {resultado}

    </div>
    </>)

}


export default MinimoMaximo;



