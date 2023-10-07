
//23. Buscar Elemento Máximo/Mínimo: Escribe una función que encuentre el 
//elemento máximo o mínimo en un array de números.

import { useState } from "react";

const MinimoMaximo = () => {

    const array = [2, 6, 47, 32, 53, 14, 22, 27, 3, 19];

    const [resultado, setResultado] = useState(0);



    return(<>
    <div>
        <h2>23. Busca el minimo o maximo del array</h2>
        {`[${array.join(",")}]`}
        <br/><br/>
        <button>Maximo</button>{" "}
        <button>Minimo</button>{" "}
        {resultado}

    </div>
    </>)

}


export default MinimoMaximo;



