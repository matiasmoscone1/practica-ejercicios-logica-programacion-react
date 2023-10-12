

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
    

    const cuentaElementosRepetidos = (val, arr) => {
        //console.log(typeof val, val);
        //console.log(arr);
        const arrayReducido = arr.reduce((acc, valorActual) => {
            const cadena = JSON.stringify(valorActual);
            const cadenaValor = JSON.stringify(val);
            //console.log(typeof cadena);
            //console.log(typeof cadenaValor);
            if(typeof cadena === typeof cadenaValor && cadena === cadenaValor){
                acc++;
            }
    
            return acc;
            //ese 0  que se le pasa como segundo parametro a la funcion reduce 
            //es el valor incial del acumulador
        }, 0);
        //console.log(arrayReducido);

        setResultado(arrayReducido);
        //console.log(resultado);
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

