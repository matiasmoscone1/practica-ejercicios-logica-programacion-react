
//25. Reducción de Cadenas: Crea una función que tome un array de cadenas y utilice 
//la función reduce para concatenar todas las cadenas en una sola cadena.

import { useState } from "react";


const ReduccionDeCadenas = () => {

    const [arrayCadenas, setArrayCadenas] = useState(null);
    const [resultado, setResultado] = useState("");

    console.log(arrayCadenas);

    const reduceCadenas = (arr) => {
        const nuevoArray = arr.split(" ");
        //console.log(nuevoArray);

        const arrayReducido = nuevoArray.reduce((str, valor) => str + valor);
        setResultado(arrayReducido);
        //console.log(arrayReducido);

    }


    return(<>
    <div>
        <h2>25. Reduce las cadenas a una sola </h2>
        <textarea cols={50} rows={6} onChange={(e) => {setArrayCadenas(e.target.value)}}/>
        <br/><br/>
        <button onClick={() => reduceCadenas(arrayCadenas)}>Reducir</button><br/><br/>
        {`El array reducido es: ${resultado}`}
    </div>
    </>)

}

export default ReduccionDeCadenas;
