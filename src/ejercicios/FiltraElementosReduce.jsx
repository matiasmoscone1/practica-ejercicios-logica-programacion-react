
//33. Filtrado de elementos: Dado un arreglo de objetos, utiliza reduce para filtrar 
//los elementos que cumplan cierta condición y crear un nuevo arreglo con esos elementos.

import { useState } from "react";


const FiltraElementosReduce = () => {

    const arrayNumeros = [2, 33, 15, 32, 64, 9, 12, 24, 7, 5, 19, 29, 22, 4, 43, 18, 1];

    const [resultado, setResultado] = useState(null);

    const filtraPares = (arr) => {

        const nuevoArray = arr.reduce((acc, val) => {
            if(val % 2 === 0){
                acc.push(val);
            }
            return(acc);
        }, []);
        setResultado(nuevoArray);
    }

    const filtraImpares = (arr) => {
        const arrayNuevo = arr.reduce((acc, val) => {
            if(!val % 2 === 0){
                acc.push(val);
            }
            return acc;
        }, []);

        setResultado(arrayNuevo);
    }
    
    const filtraPrimos = (arr) => {

    }
    const filtraMultiplos = (arr) => {

    }

    console.log(resultado);


    return(<>
    <div>
        <h2>33. Filtrado de elementos con reduce</h2>
        <p>{`[${arrayNumeros.join(",")}]`}</p>
        <button onClick={() => filtraPares(arrayNumeros)}>Nros Pares</button>{" "}
        <button>Nros Impares</button>{" "}
        <button>Nros Primos</button>{" "}
        <button>Multiplo de 3</button>
    </div>
    </>)

}


export default FiltraElementosReduce;

