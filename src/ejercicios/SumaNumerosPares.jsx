

//29. Suma de Números Pares: Dado un array de números, utiliza funciones de programación 
//funcional para calcular la suma de todos los números pares en el array.

import { useState } from "react";

//creando componente
const SumaNumerosPares = () => {

    //creando array de numeros y variable de esatdo donde se almacenara el resultado
    const arrayNumeros = [2, 54, 67, 33, 85, 62, 72, 11, 16, 99];
    const [resultado, setResultado] = useState(null);

    //creando funcion que se le pasa por parametro un array de numeros
    const cuentaPares = (arr) => {

        //se utiliza la funcion reduce con un operador ternario
        arr.reduce((acc, val) => {
            //el cual tiene un acumulador donde va acumulando si el numero es par
            val % 2 === 0 ? acc+=val : acc;
 
            //setea el acumulador como resultado final
            setResultado(acc);
            //devuelve el acumulador (podria omitirse el return en este caso)
            return acc;
        //se pasa por segundo parametro de la funcion reduce el valor inicial
        }, 0);
        

        //console.log(arrayReducido);
    }
    



    return(<>
    <div>
        <h2>29. Suma los numeros pares de un array</h2>
        {/* Muestra array de numeros en pantalla */}
        {`[${arrayNumeros.join(",")}]`}{" "}
        {/* dos botones que pasan la funcion correspondiente para cada boton */}
        <button onClick={() => cuentaPares(arrayNumeros)}>Cuenta Pares</button>{" "}
        <button onClick={() => setResultado("")}>Limpiar</button>{" "}
        {/* muestra el resultado en pantalla */}
        {resultado}

    </div>
    </>)


}

export default SumaNumerosPares;
