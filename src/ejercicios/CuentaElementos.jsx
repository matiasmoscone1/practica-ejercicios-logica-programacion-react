

//27. Cuenta de elementos en un arreglo: Dado un arreglo, utiliza reduce para contar 
//cuántas veces aparece un valor específico en el arreglo. (utilizando reduce)
//SOLO COMPARA CON CADENA DE TEXTO

import { useState } from "react";

//creando componente
const CuentaElementos = () => {

    //creando array inicial de valores
    const array = ["hola", 3, 6, "hola", false, 70, true, "hola", 6, "6", "asdasd", "true",
    true, true, 6, "hola", {asd: "asd", num: 2}, ["gg", "gg", "gg"]];

    //creando variables de estado
    const [valor, setValor] = useState(null);
    const [resultado, setResultado] = useState(null);
    

    //funcion que cuenta elementos repetidos, se le pasa como parametro el valor que se quiere
    //contar y el array de elementos
    const cuentaElementosRepetidos = (val, arr) => {

        //se utiliza reduce, el acc acumula cada vez que se encuentre el elemento en el array
        //el valor actual es el que va "iterando"
        const arrayReducido = arr.reduce((acc, valorActual) => {
            //Tanto al valor actual y al valor pasado por parametro, se los convierte en string
            const cadena = JSON.stringify(valorActual);
            const cadenaValor = JSON.stringify(val);
       
            //compara el valor pasado por parametro en la funcion con el valor actual, si
            //"matchea" se suma 1 al acumulador.
            if(typeof cadena === typeof cadenaValor && cadena === cadenaValor){
                acc++;
            }
            //devuelve el acumulador
            return acc;
            //ese 0  que se le pasa como segundo parametro a la funcion reduce 
            //es el valor incial del acumulador
        }, 0);

        //setea el resultado con el array nuevo reducido, que devuelve el num del acumulador
        setResultado(arrayReducido);
    }


    return(<>
    <div>
        <h2>27. Cuenta elementos de un array (solo cadenas de texto) </h2>
        <input onChange={(e) => setValor(e.target.value)}/>{" "}
        <button onClick={() => cuentaElementosRepetidos(valor, array)}>Contar Elemento</button>{" "}
        {resultado}

    </div>
    </>)

}

export default CuentaElementos;

