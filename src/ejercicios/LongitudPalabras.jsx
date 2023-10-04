

//19. Mapeo de Palabras: Dado un array de palabras, utiliza la función map para crear 
//un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";


const LongitudPalabras = () => {

    const [arrayPalabras, setArrayPalabras] = useState("");

    


    console.log(arrayPalabras.split(" "));


    return(<>
    <div>
        <h2>19. Determina longitud de palabras </h2>

        <textarea cols={40} rows={6} placeholder="Escribe el texto" onChange={(e) => setArrayPalabras(e.target.value)}/>
        <br/>
        {}

    </div>

    </>)


}


export default LongitudPalabras;
