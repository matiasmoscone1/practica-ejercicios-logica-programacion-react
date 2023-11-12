

//36. Flatten de arreglos anidados: Dado un arreglo de arreglos, utiliza reduce para 
//aplanar la estructura y obtener un único arreglo con todos los elementos.

import { useState } from "react";

const FlattenDeArreglos = () => {

    const arrayPrincipal = [[1,6,3,9,14], ["hola", "como", "andas"], [1, true, "hola", false],
    [{nombre: "matias", apellido: "moscone", edad: 27}], ["hola", 54, {objeto: "esto es un objeto"}]];

    const [resultado, setResultado] = useState(null);

    /*
    const reducirArreglo = (arr) => {
        const nuevoArray = arr.reduce((acc, val) => {
            if(typeof val === "object" && val !== null){
                acc.push(Object.values(JSON.stringify(val)));
            }else if(Array.isArray(val)){
                acc.push(reducirArreglo(val));
            }else{            
                acc.push(val);
            }            
            return acc;
        }, []);
        setResultado(nuevoArray);
        //console.log(nuevoArray);
    }*/

    console.log(arrayPrincipal);
    const redArray = (arr) => {
        const nuevoArreglo = arr.reduce((acc, val) => {
                val.map((valor) => {
                    if(typeof valor === "object"){
                        const obj = Object.values(valor);
                        console.log(obj);
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
        {resultado ? resultado : ""}
    </div>
    </>)

}

export default FlattenDeArreglos;
