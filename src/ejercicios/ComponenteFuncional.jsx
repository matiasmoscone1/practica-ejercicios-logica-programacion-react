
//37. Componentes Funcionales: Crea un componente funcional de React que reciba un 
//array de números como propiedades y renderice la suma de esos números.

import { useState } from "react";


const ComponenteFuncional = (arrayNum) => {

    console.log(arrayNum);

    const [resultado, setResultado] = useState(null);

    const sumaArray = (arr) => {
        return arr.reduce((acc, val) => acc += val);
    }


    return(<>
    <div>
        <h2>37. Componente funcional con props</h2>
        {arrayNum}
        <button>Calcular</button>
        <button>Limpiar</button>
        {}
    </div>
    </>)

}

export default ComponenteFuncional;
