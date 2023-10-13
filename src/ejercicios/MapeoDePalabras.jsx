

//28. Mapeo de Palabras: Dado un array de palabras, utiliza la función reduce para 
//crear un nuevo array que contenga la longitud de cada palabra.

import { useState } from "react";

//creando componente
const MapeoDePalabras = () => {

    //creando variables de estado
    const [resultado, setResultado] = useState([]);
    const [arrayPalabras, setArrayPalabras] = useState([]);

    //funcion que determina la longitud de cada palabra ingresada en el textarea, se le 
    //pasa por parametro el array a contar
    const determinaLongitud = (arr) => {
        //console.log(arr);

        //crea nuevo array vacio
        const arrayLongitud = [];
        //se convierte lo ingresado en el textarea en un array y se le hace un reduce
        //que "itera" por cada valor agrega la longitud de cada palabra en el nuevo array
        arr.split(" ").reduce((res, val) => {
            arrayLongitud.push(val.length);
        
            //console.log(arrayLongitud);
        //se pasa el segundo parametro de la funcion reduce con el primer valor del array creado
        }, arrayLongitud[0]);
        
        //se crea otro array nuevo vacio
        const arrayNuevo = [];

        //programacion estructurada, se itera con ciclo for el array de longitudes y se 
        //agrega cada valor al nuevo array con una breve descripcion
        for(let i = 0; i <= arrayLongitud.length - 1; i++){
            arrayNuevo.push(`Longitud cadena "${i + 1}": ${arrayLongitud[i]} - `);
        }


        //console.log(arrayNuevo);

        //setea el resultado con el array nuevo
        setResultado(arrayNuevo);
    }




    return(<>
    <div>
        <h2>28. Longitud de palabras de un array con reduce</h2>
        {/* textarea que guarda el value en el arrayPalabras */}
        <textarea onChange={(e) => setArrayPalabras(e.target.value)} cols={40} rows={6}/><br/><br/>
        {/* boton que escucha el evento click y llama a la funcion que determina la longitud, 
        se pasa por parametro el array de palabras */}
        <button onClick={() => determinaLongitud(arrayPalabras)}>Contar longitud</button>{" "}
        {/* muestra el resultado en pantalla */}
        {`[${resultado.join(",")}]`}



    </div>
    </>)

}

export default MapeoDePalabras;




