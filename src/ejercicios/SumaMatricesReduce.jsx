
//32. Suma de Matrices: Escribe una función que tome dos matrices bidimensionales 
//(arrays de arrays) y devuelva una nueva matriz que sea la suma de las dos 
//matrices originales.

import { useState } from "react";

//creando componente
const SumaMatricesReduce = () => {

    //creando arrays de numeros iniciales
    const array1 = [2, 4, 35, 22, 7];
    const array2 = [3, 10, 22, 42, 15, 28];

    //creando varialbe de estado que almacenara el resultado
    const [resultado, setResultado] = useState(null);

    //creando funcion para sumar las matrices con reduce
    const sumarMatrices = (arr1, arr2) => {
        //console.log(arr1, arr2);
            //creando nuevo arreglo vacio
            const nuevoArray = [];
            //si el largo del arreglo1 es mayor q el 2do, se toma como referencia el arr1
            //y se le hace la funcion reduce desde ese arreglo.        
            if(arr1.length > arr2.length){                
                arr1.reduce((arrSum, val, i = 0) => {
                    arrSum = (val || 0) + (arr2[i] || 0);
                    i++;          
                    //console.log(arrSum);
                    nuevoArray.push(arrSum);
                }, 0);
            //si el largo del arreglo2 es mayor o igual q el 1ero, se toma como referencia 
            //el arr2 y se le hace la funcion reduce desde ese arreglo.
            }else{                
                arr2.reduce((arrSum, val, i = 0) => {
                    arrSum = (val || 0) + (arr1[i] || 0);
                    i++;          
                    //console.log(arrSum);
                    nuevoArray.push(arrSum);
                }, 0);
            }
        setResultado(nuevoArray);
    }


    return(<>
    <div>
        <h2>32. Suma de matrices con reduce </h2>
        {`[${array1.join(",")}]`} - {`[${array2.join(",")}]`}<br/><br/>

        <button onClick={() => sumarMatrices(array1, array2)}>Sumar Matrices</button>{" "}
        <button onClick={() => setResultado(null)}>Limpiar</button>
        <p>{resultado ? `Resultado: [${resultado}]` : " "}</p>
    </div>
    </>)

}

export default SumaMatricesReduce;

