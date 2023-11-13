
//37. Componentes Funcionales: Crea un componente funcional de React que reciba un 
//array de números como propiedades y renderice la suma de esos números.

import { useState } from "react";


const ComponenteFuncional = (arrayNum) => {

    console.log(arrayNum);

    const [resultado, setResultado] = useState(null);

    const sumaArray = (arreglo) => {
        console.log(arreglo);
        let acc = 0;
        arreglo.arr.map((val) => acc += val);        
        setResultado(acc);
    }

    console.log(resultado);

    return(<>
    <div>
        <h2>37. Componente funcional con props</h2>
        {arrayNum.arr}
        <button onClick={() => sumaArray(arrayNum)}>Calcular</button>
        <button>Limpiar</button>
        {resultado}
    </div>
    </>)

}

export default ComponenteFuncional;
