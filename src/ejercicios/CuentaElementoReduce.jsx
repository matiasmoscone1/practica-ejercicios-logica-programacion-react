

//31. Conteo de Elementos: Crea una función que cuente la cantidad de veces que aparece 
//un elemento específico en un array.

import { useState } from "react";

const CuentaElementoReduce = () => {

    const arrayNumeros = [2, 53, 43, 2, 58, 2, 53, 33, 16, 2, 53, 10, 2, 53, 43, 5, 5, 53];
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState(null);

    
    return(<>
    <div>
        <h2>31. Cuenta elemento repetido con reduce</h2>
        <input type={number} placeholder={"Escribe el numero"} onChange={(e) => setNumero(e.target.value)}/>    


    </div>
    </>)

}

export default CuentaElementoReduce;
