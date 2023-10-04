

//19. Mapeo de Palabras: Dado un array de palabras, utiliza la función map para crear 
//un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";

// creando componente 
const LongitudPalabras = () => {

    //creando variables de estado
    const [arrayPalabras, setArrayPalabras] = useState("");
    const [arrayLongitud, setArrayLongitud] = useState([]);
    
    //creando funcion que recibe por parametro el texto escrito por el usuario
    const longitud = (texto) => {
        //convirtiendo ese texto en un array de palabras
        const nuevoArray = texto.split(" ");
        //crea un nuevo array con la longitud de cada palabra dentro del array de palabras
        const longitudes = nuevoArray.map((palabra) => palabra.length);
        //setea nuevamente el arrayLongitud
        setArrayLongitud(longitudes);     
        //console.log(arrayLongitud);
    }

    //console.log(arrayPalabras.split(" "));

    //console.log(arrayLongitud);

    return(<>
    <div>
        <h2>19. Determina longitud de palabras en array</h2>
        {/* textarea que es donde escribe el usuario el texto*/}
        <textarea cols={40} rows={6} placeholder="Escribe el texto" onChange={(e) => setArrayPalabras(e.target.value)}/>
        <br/>
        {/* boton que llama a la funcion principal donde se realiza la logica del ejercicio*/}
        <button onClick={() => longitud(arrayPalabras)}>Calcular</button>
        {/* Muestra el resultado en pantall */}
        <p>{`[${arrayLongitud.join(",")}]`}</p>
       

    </div>

    </>)


}


export default LongitudPalabras;
