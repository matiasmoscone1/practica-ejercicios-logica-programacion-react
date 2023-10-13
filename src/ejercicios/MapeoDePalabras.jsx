

//28. Mapeo de Palabras: Dado un array de palabras, utiliza la función reduce para 
//crear un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";

const MapeoDePalabras = () => {

    const [resultado, setResultado] = useState(null);
    const [arrayPalabras, setArrayPalabras] = useState([]);


    const determinaLongitud = (arr) => {
        //console.log(arr);

        const arrayLongitud = [];
        const arrayReducido = arr.split(" ").reduce((res, val) => {
            arrayLongitud.push(val.length);
        
            console.log(arrayLongitud);
        }, arrayLongitud[0]);
        return(arrayReducido);

    }




    return(<>
    <div>
        <h2>28. Longitud de palabras de un array con reduce</h2>
        <textarea onChange={(e) => setArrayPalabras(e.target.value)} cols={40} rows={6}/><br/><br/>
        <button onClick={() => determinaLongitud(arrayPalabras)}>Contar longitud</button>{" "}
        {resultado}



    </div>
    </>)

}

export default MapeoDePalabras;




