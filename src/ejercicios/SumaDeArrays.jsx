
//24. Suma de Matrices: Escribe una función que tome dos matrices bidimensionales 
//(arrays de arrays) y devuelva una nueva matriz que sea la suma de las dos 
//matrices originales.

import { useState } from "react";

const SumaDeArrays = () => {

    const matriz1 = [2,6,10,20];
    const matriz2 = [4,8,5,30];
    const [resultado, setResultado] = useState([]);

    const sumarMatrices = (mat1, mat2) => {
            const nuevoArray = mat1.map((valor, indice) => valor + mat2[indice]);
            console.log(nuevoArray);
        }

        //console.log(nuevoArray);


    


    return(<>
    <div>
        <h2>24. Suma de matrices (arrays) </h2>
        Matriz 1: {`[${matriz1.join(",")}]`}<br/>
        Matriz 2: {`[${matriz2.join(",")}]`}<br/><br/>

        <button onClick={() => sumarMatrices(matriz1, matriz2)}>Sumar</button>


    </div>
    </>)
}

export default SumaDeArrays;


