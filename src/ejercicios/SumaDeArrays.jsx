
//24. Suma de Matrices: Escribe una función que tome dos matrices bidimensionales 
//(arrays de arrays) y devuelva una nueva matriz que sea la suma de las dos 
//matrices originales. La suma debe ser valor con valor

import { useState } from "react";


//creando componente
const SumaDeArrays = () => {

    //creando matrices iniciales y variable de estado resultado
    const matriz1 = [2,6,10,20];
    const matriz2 = [4,8,5,30];
    const [resultado, setResultado] = useState([]);

    //creando funcion que suma matrices, se le tiene q pasar como parametro las dos matrices
    const sumarMatrices = (mat1, mat2) => {

        //si tienen la misma longitud, mapea la primera matriz con valor y el indicie
        //y suma el valor con el valor de la matriz2 del mismo indice
            if(mat1.length === mat2.length){                
                const nuevoArray = mat1.map((valor, indice) => valor + mat2[indice]);
                //console.log(nuevoArray);
                //almacena el resultado en la variable de estado
                setResultado(nuevoArray);
            }else{
                //si no tienen la misma longitud lanza este error
                console.error("La longitud de las matrices debe ser igual");
            }

        }

        
    return(<>
    <div>
        <h2>24. Suma de matrices (arrays) </h2>
        {/* Muestra en pantalla las matrices iniciales */}
        Matriz 1: {`[${matriz1.join(",")}]`}<br/>
        Matriz 2: {`[${matriz2.join(",")}]`}<br/><br/>

        {/* Boton que tiene el evento onClick y llama a la funcion de sumar matrices
        le pasa por parametros ambas matrices iniciales */}
        <button onClick={() => sumarMatrices(matriz1, matriz2)}>Sumar</button><br/><br/>
        {/* Muestra resultado en pantall */}
        <span>El resultado es: </span>
        {`[${resultado.join(",")}]`}

    </div>
    </>)
}

export default SumaDeArrays;


