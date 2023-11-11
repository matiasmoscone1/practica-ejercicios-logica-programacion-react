

//36. Flatten de arreglos anidados: Dado un arreglo de arreglos, utiliza reduce para 
//aplanar la estructura y obtener un único arreglo con todos los elementos.

import { useState } from "react";

const FlattenDeArreglos = () => {

    const arrayPrincipal = [[1,6,3,9,14], ["hola", "como", "andas"], [1, true, "hola", false],
    [{nombre: "matias", apellido: "moscone", edad: 27}], ["hola", 54, {objeto: "esto es un objeto"}]];

    const [resultado, setResultado] = useState(null);

    const reducirArreglo = (arr) => {
        const nuevoArray = arr.reduce((acc, val) => {
            acc.push(val);
            return(acc);
        }, []);
        setResultado(nuevoArray);
        //console.log(nuevoArray);
    }

    //console.log(arrayPrincipal);

    


    return(<>
    <div>
        <h2>36. Flatten de arreglos anidados con reduce</h2>

        {`[${arrayPrincipal.join("][")}]`}
        <button onClick={() => reducirArreglo(arrayPrincipal)}>Añidar</button> 
        <button onClick={() => limpiar()}>Limpiar</button>
        {resultado ? resultado : ""}
    </div>
    </>)

}

export default FlattenDeArreglos;
