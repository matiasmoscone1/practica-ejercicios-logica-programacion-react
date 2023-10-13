

//28. Mapeo de Palabras: Dado un array de palabras, utiliza la función reduce para 
//crear un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";

const MapeoDePalabras = () => {

    const [resultado, setResultado] = useState(null);



    return(<>
    <div>
        <h2>28. Longitud de palabras de un array con reduce</h2>
        <textarea cols={40} rows={6}/><br/><br/>
        <button>Contar longitud</button>{" "}
        {resultado}



    </div>
    </>)

}

export default MapeoDePalabras;




