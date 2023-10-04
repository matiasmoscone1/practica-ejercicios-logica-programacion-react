

//19. Mapeo de Palabras: Dado un array de palabras, utiliza la función map para crear 
//un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";


const LongitudPalabras = () => {

    const [arrayPalabras, setArrayPalabras] = useState("");


    console.log(arrayPalabras);

    return(<>
    <div>
        <h2>19. Determina longitud de palabras </h2>

        <textarea placeholder="Escribe el texto" onChange={(e) => setArrayPalabras(e.target.value)}/>


    </div>

    </>)


}


export default LongitudPalabras;
