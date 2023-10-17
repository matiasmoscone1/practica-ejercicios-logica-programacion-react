
//32. Suma de Matrices: Escribe una función que tome dos matrices bidimensionales 
//(arrays de arrays) y devuelva una nueva matriz que sea la suma de las dos 
//matrices originales.

import { useState } from "react";

const SumaMatricesReduce = () => {

    const array1 = [2, 4, 35, 22, 7];
    const array2 = [3, 10, 22, 42, 15, 28];

    const [resultado, setResultado] = useState([]);

    const sumarMatrices = (arr1, arr2) => {
        //console.log(arr1, arr2);
            const nuevoArray = [];        
            if(arr1.length > arr2.length){                
                arr1.reduce((arrSum, val, i = 0) => {
                    arrSum = (val || 0) + (arr2[i] || 0);
                    i++;          
                    console.log(arrSum);
                    nuevoArray.push(arrSum);
                }, 0);
            }else{                
                arr2.reduce((arrSum, val, i = 0) => {
                    arrSum = (val || 0) + (arr1[i] || 0);
                    i++;          
                    console.log(arrSum);
                    nuevoArray.push(arrSum);
                }, 0);
            }
        setResultado(nuevoArray);
    }


    return(<>
    <div>
        <h2>32. Suma de matrices con reduce </h2>
        {`[${array1.join(",")}]`} - {`[${array2.join(",")}]`}<br/><br/>

        <button onClick={() => sumarMatrices(array1, array2)}>Sumar Matrices</button>

        <p>{`Resultado: ${resultado}`}</p>
    </div>
    </>)

}

export default SumaMatricesReduce;

