

//20. Suma de Números Pares: Dado un array de números, utiliza funciones de programación 
//funcional para calcular la suma de todos los números pares en el array.

import { useState } from "react";

const SumaDePares = () => {


    const array = [20,13,6,23,2,7,15,12,9,5,4];


    const sumaPares = () => {
        let acumulador = 0;

        for(let i = 0; i <= array.length; i++){
            if(array[i] % 2 === 0){
                acumulador += array[i];
            }

        }

        console.log(acumulador);
        

    }




    return(<>
    <div>
        <h2>20. Suma de numeros pares dentro de un array</h2>
        {`[${array.join(",")}]`}
        <br/><br/>
        <button onClick={() => sumaPares()}>Calcular</button>

    </div>
    </>)

}


export default SumaDePares;