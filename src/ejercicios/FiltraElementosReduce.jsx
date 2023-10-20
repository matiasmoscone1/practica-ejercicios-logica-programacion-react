
//33. Filtrado de elementos: Dado un arreglo de objetos, utiliza reduce para filtrar 
//los elementos que cumplan cierta condición y crear un nuevo arreglo con esos elementos.

import { useState } from "react";

//creando componente 
const FiltraElementosReduce = () => {

    //creando array de numeros inicial
    const arrayNumeros = [2, 33, 15, 32, 64, 9, 12, 24, 7, 5, 19, 29, 22, 4, 43, 18, 1];

    //creando variables de estado
    const [resultado, setResultado] = useState(null);

    //filtra pares, le pasa un array de numeros como parametro
    const filtraPares = (arr) => {
        //utiliza reduce, guarda en la variable acumulador, los valores que son pares
        const nuevoArray = arr.reduce((acc, val) => {
            if(val % 2 === 0){
                acc.push(val);
            }
            return(acc);
        }, []);
        //setea el resultado del reduce a la variable de estado creada
        setResultado(nuevoArray);
    }

    const filtraImpares = (arr) => {
        const arrayNuevo = arr.reduce((acc, val) => {
            if(!(val % 2 === 0)){
                acc.push(val);
            }
            return acc;
        }, []);
        //setea el resultado del reduce a la variable de estado creada
        setResultado(arrayNuevo);
    }

    const filtraRacional = (arr) => {
        const arrayNuevo = arr.reduce((acc, val) => {
            if(val % 1 === 0){
                acc.push(val);
            }
            return acc;
        }, []);
        //setea el resultado del reduce a la variable de estado creada
        setResultado(arrayNuevo);
    }
    const filtraMultiplos = (arr) => {
        const arrayNuevo = arr.reduce((acc, val) => {
            if(val % 3 === 0){
                acc.push(val);
            }
            return(acc);
        }, []);
        //setea el resultado del reduce a la variable de estado creada
        setResultado(arrayNuevo);
    }

    //console.log(resultado);


    return(<>
    <div>
        <h2>33. Filtrado de elementos con reduce</h2>
        <p>{`[${arrayNumeros.join(",")}]`}</p>
        <button onClick={() => filtraPares(arrayNumeros)}>Nros Pares</button>{" "}
        <button onClick={() => filtraImpares(arrayNumeros)}>Nros Impares</button>{" "}
        <button onClick={() => filtraRacional(arrayNumeros)}>Nros Racionales</button>{" "}
        <button onClick={() => filtraMultiplos(arrayNumeros)}>Multiplo de 3</button>{" "}
        <button onClick={() => setResultado(null)}>Limpiar</button>
        <p>{ resultado ? `[${resultado}]` : null}</p>

    </div>
    </>)

}


export default FiltraElementosReduce;

