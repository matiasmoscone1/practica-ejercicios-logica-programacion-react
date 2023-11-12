

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

    //console.log(arrayPrincipal);
    
    //creando funcion reductora de array que contendra toda la logica, se pasa por parametro un array
    const redArray = (arr) => {
        
        const nuevoArreglo = arr.reduce((acc, val) => {
                val.map((valor) => {
                    if(typeof valor === "object"){
                        const obj = Object.values(valor);
                        //console.log(obj);
                        obj.map((i) => acc.push(i));
                    }
                    if(typeof valor !== "object"){
                        acc.push(valor);
                    }                    
                })
            return acc;
        }, []);
        setResultado(nuevoArreglo);
    }



    //console.log(arrayPrincipal);

    console.log(resultado);

    const limpiar = () => {
        setResultado(null);
    }

    return(<>
    <div>
        <h2>36. Flatten de arreglos anidados con reduce</h2>

        {`[${arrayPrincipal.join("][")}]`}<br/><br/>
        <button onClick={() => redArray(arrayPrincipal)}>Añidar</button>{" "}
        <button onClick={() => limpiar()}>Limpiar</button>
        <br/><br/>
        {resultado ? `[${resultado.join(",")}]` : ""}
    </div>
    </>)

}

export default FlattenDeArreglos;
