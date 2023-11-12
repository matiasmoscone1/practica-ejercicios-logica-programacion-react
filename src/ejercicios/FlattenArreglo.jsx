

//36. Flatten de arreglos anidados: Dado un arreglo de arreglos, utiliza reduce para 
//aplanar la estructura y obtener un único arreglo con todos los elementos.

import { useState } from "react";

//creando componente 
const FlattenDeArreglos = () => {

    //creando array de arrays con distintos valores
    const arrayPrincipal = [[1,6,3,9,14], ["hola", "como", "andas"], [1, true, "hola", false],
    [{nombre: "matias", apellido: "moscone", edad: 27}], ["hola", 54, {objeto: "esto es un objeto"}]];

    //creando variable de estado que almacenara el resultado
    const [resultado, setResultado] = useState(null);

    //creando funcion reductora de array que contendra toda la logica, se pasa por parametro un array
    const redArray = (arr) => {
        //creando array donde se almacenara todo el resultado, se le hace un reduce al array
        //pasado por parametro
        const nuevoArreglo = arr.reduce((acc, val) => {
                //por cada valor que se itere en el array, se le hace una serie de verificaciones
                val.map((valor) => {
                    //si es un objeto, se extraen todos los valores del objeto
                    if(typeof valor === "object"){
                        const obj = Object.values(valor);
                        //console.log(obj);
                        //se genera el array de valores del objeto y se itera el array, se añaden
                        //cada valor del objeto al array acc
                        obj.map((i) => acc.push(i));
                    }
                    //si no es un objeto, se almacena directamente el valor en el array acc
                    if(typeof valor !== "object"){
                        acc.push(valor);
                    }                    
                })
            //devuelve el array acc con todos los valores
            return acc;
        //se inicializa acc como array vacio
        }, []);
        //se guarda el nuevo array en la variable de estado resultado
        setResultado(nuevoArreglo);
    }

    //se crea funcion limpiar para limpiar el resultado de la pantalla
    const limpiar = () => {
        setResultado(null);
    }

    return(<>
    <div>
        <h2>36. Flatten de arreglos anidados con reduce</h2>

        {/* Se muestra el array principal con todos los valores */}
        {`[${arrayPrincipal.join("][")}]`}<br/><br/>
        {/* Botones con distintas funcionalidades cada uno, se llama a la funcion especifica */}
        <button onClick={() => redArray(arrayPrincipal)}>Añidar</button>{" "}
        <button onClick={() => limpiar()}>Limpiar</button>
        <br/><br/>
        {/* Muestra el resultado en forma de array general separando cada valor por coma (,) y si
        no existe "resultado", no se muestra nada*/}
        {resultado ? `[${resultado.join(",")}]` : ""}
    </div>
    </>)

}

export default FlattenDeArreglos;
