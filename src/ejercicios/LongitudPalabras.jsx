

//19. Mapeo de Palabras: Dado un array de palabras, utiliza la función map para crear 
//un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";


const LongitudPalabras = () => {

    const [arrayPalabras, setArrayPalabras] = useState("");
    const [arrayLongitud, setArrayLongitud] = useState([]);
    
    const longitud = (texto) => {
        const nuevoArray = texto.split(" ");
        const longitudes = nuevoArray.map((palabra) => palabra.length);
        setArrayLongitud(longitudes);     
        //console.log(arrayLongitud);
    }

    //console.log(arrayPalabras.split(" "));

    console.log(arrayLongitud);

    return(<>
    <div>
        <h2>19. Determina longitud de palabras en array</h2>

        <textarea cols={40} rows={6} placeholder="Escribe el texto" onChange={(e) => setArrayPalabras(e.target.value)}/>
        <br/>
        <button onClick={() => longitud(arrayPalabras)}>Calcular</button>
        <p>{`[${arrayLongitud.join(",")}]`}</p>
       

    </div>

    </>)


}


export default LongitudPalabras;
