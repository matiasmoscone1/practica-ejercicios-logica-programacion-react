

//27. Cuenta de elementos en un arreglo: Dado un arreglo, utiliza reduce para contar 
//cuántas veces aparece un valor específico en el arreglo. (utilizando reduce)

import { useState } from "react";


const CuentaElementos = () => {


    const array = ["hola", 3, 6, "hola", false, 70, true, "hola", 6, "6", "asdasd", "true",
    true, true, 6, "hola", {asd: "asd", num: 2}, ["gg", "gg", "gg"]];

    const [resultado, setResultado] = useState(null);
    



    return(<>
    <div>
        <h2>27. Cuenta elementos de un array </h2>
    </div>
    </>)

}

export default CuentaElementos;

