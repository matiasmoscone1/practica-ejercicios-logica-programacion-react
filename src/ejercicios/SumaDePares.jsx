

//20. Suma de Números Pares: Dado un array de números, utiliza funciones de programación 
//funcional para calcular la suma de todos los números pares en el array.

import { useState } from "react";

const SumaDePares = () => {

    //creando array inicial de numeros
    const array = [20,13,6,23,2,7,15,12,9,5,4];

    //creando variable de estado donde se almacenara el resultado 
    const [resultado, setResultado] = useState(0);

    //creando funcion con paradigma estructurado
    const sumaParesEstructurada = () => {
        //creando variable acumulador
        let acumulador = 0;
        //recorriendo el array con ciclo flor
        for(let i = 0; i <= array.length; i++){
            //si el numero dividido por 2 el resto es 0, significa que es par
            if(array[i] % 2 === 0){
                //se suma en la variable acumulador
                acumulador += array[i];
                //se almacena el resultado en la variable de estado
                setResultado(ac);
            }
        }
        //console.log(acumulador);
    }

    //creando funcion con paradigma funcional
    const sumaParesFuncional = () => {
        //creando variable acumulador
        let ac = 0;
        //haciendo un filtrado del array con los numeros pares
        array.filter((num) => {if(num % 2 === 0){
            //se le suma el numero par a la variable acumulador
            ac += num;
            //se almacena el resultado en la variable de estado
            setResultado(ac);
        }});

        //console.log(ac);
    }




    return(<>
    <div>
        <h2>20. Suma de numeros pares dentro de un array</h2>
        {/* mostrando el array inicial en pantalla */}
        {`[${array.join(",")}]`}
        <br/><br/>
        {/* Boton que le pasa por parametro la funcion para calcular la suma de nros pares */}
        <button onClick={() => sumaParesFuncional()}>Calcular</button>{" "}
        <span>{resultado}</span>

    </div>
    </>)

}


export default SumaDePares;