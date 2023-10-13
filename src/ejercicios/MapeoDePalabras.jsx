

//28. Mapeo de Palabras: Dado un array de palabras, utiliza la función reduce para 
//crear un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";

const MapeoDePalabras = () => {

    const [resultado, setResultado] = useState([]);
    const [arrayPalabras, setArrayPalabras] = useState([]);


    const determinaLongitud = (arr) => {
        //console.log(arr);

        const arrayLongitud = [];
        arr.split(" ").reduce((res, val) => {
            arrayLongitud.push(val.length);
        
            console.log(arrayLongitud);
        }, arrayLongitud[0]);
        
        const arrayNuevo = [...arrayLongitud];

        for(let i = 0; i <= arrayLongitud.length - 1; i++){
            arrayNuevo.push(`Longitud: ${arrayLongitud[i]}`);
        }


        console.log(arrayNuevo);

        setResultado(arrayLongitud);
    }




    return(<>
    <div>
        <h2>28. Longitud de palabras de un array con reduce</h2>
        <textarea onChange={(e) => setArrayPalabras(e.target.value)} cols={40} rows={6}/><br/><br/>
        <button onClick={() => determinaLongitud(arrayPalabras)}>Contar longitud</button>{" "}
        {`[${resultado.join(",")}]`}



    </div>
    </>)

}

export default MapeoDePalabras;




