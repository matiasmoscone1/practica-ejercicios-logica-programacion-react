
//25. Reducción de Cadenas: Crea una función que tome un array de cadenas y utilice 
//la función reduce para concatenar todas las cadenas en una sola cadena.

import { useState } from "react";

//creando componente 
const ReduccionDeCadenas = () => {
    //creando variables de estado, arrayCadenas es todo lo que ingresa el usuario en textarea
    const [arrayCadenas, setArrayCadenas] = useState(null);
    //resultado es el array reducido final
    const [resultado, setResultado] = useState("");

    //console.log(arrayCadenas);

    //creando funcion que reduce las cadenas a una sola
    const reduceCadenas = (arr) => {
        //convierte las cadenas en un array de cadenas
        const nuevoArray = arr.split(" ");
        //console.log(nuevoArray);

        //reduce a una sola cadena el array de cadenas, str es el acumulador y valor es el 
        //valor actual que va "iterando"
        const arrayReducido = nuevoArray.reduce((str, valor) => str + valor);
        //guarda el array reducido en la variable de estado resultado
        setResultado(arrayReducido);
        //console.log(arrayReducido);

    }


    return(<>
    <div>
        <h2>25. Reduce las cadenas a una sola </h2>
        {/* textarea donde el usuario escribe y guarda el valor del textarea en la variable
        de estado arrayCadenas */}
        <textarea cols={50} rows={6} onChange={(e) => {setArrayCadenas(e.target.value)}}/>
        <br/><br/>
        {/* al evento onClick del boton "Reducir" se le pasa la funcion reductora con el parametro
        de las cadenas escritas en el textarea */}
        <button onClick={() => reduceCadenas(arrayCadenas)}>Reducir</button><br/><br/>
        {/* muestra el resultado en pantalla */}
        {`El array reducido es: ${resultado}`}
    </div>
    </>)

}

export default ReduccionDeCadenas;
