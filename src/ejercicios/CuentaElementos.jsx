

//27. Cuenta de elementos en un arreglo: Dado un arreglo, utiliza reduce para contar 
//cuántas veces aparece un valor específico en el arreglo. (utilizando reduce)

import { useState } from "react";


const CuentaElementos = () => {


    const array = ["hola", 3, 6, "hola", false, 70, true, "hola", 6, "6", "asdasd", "true",
    true, true, 6, "hola", {asd: "asd", num: 2}, ["gg", "gg", "gg"]];

    const [valor, setValor] = useState(null);
    const [resultado, setResultado] = useState(null);
    

    const cuentaElementosRepetidos = (val, arr) => {
        console.log(typeof val, val);
        console.log(arr);
        let acumulador = 0;
        // IMPLEMENTAR MEJOR LOGICA, FALLA RESULTADO PORQUE COMPARA VALOR CON VALOR SIGUIENTE
        const arrayReducido = arr.reduce((acc, valorActual) => {
            const cadena = JSON.stringify(valorActual);
            //console.log(typeof cadena);

            acc[cadena] = (acc[cadena] || 0) + 1;
            console.log(acc);
        });
        console.log(acumulador);

    }


    return(<>
    <div>
        <h2>27. Cuenta elementos de un array </h2>
        <input onChange={(e) => setValor(e.target.value)}/>{" "}
        <button onClick={() => cuentaElementosRepetidos(valor, array)}>Contar Elemento</button>


    </div>
    </>)

}

export default CuentaElementos;

