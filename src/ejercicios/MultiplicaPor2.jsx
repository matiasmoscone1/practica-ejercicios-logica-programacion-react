
//17. Crea un componente de React que tome una lista de números y muestre una nueva 
//lista donde cada número sea multiplicado por 2.

import { useState } from "react";

const MultiplicaPor2 = () => {

    const arrayNumeros = [12,6,8,23,3,17];

    const [resultado, setResultado] = useState(arrayNumeros);

    const multiplicarArray = (valor) => {
        const nuevoArray = resultado.map((num) => num * valor);
        setResultado(nuevoArray);

    }

    return(<>
    <div>
        <h2>17. Array multiplicado </h2>

        <button onClick={() => multiplicarArray(2)}>x2</button>{" "}
        <button onClick={() => multiplicarArray(5)}>x5</button>{" "}
        <button onClick={() => multiplicarArray(10)}>x10</button><br/><br/>
        <span>{`[${resultado}]`}</span>


    </div>
    
    </>)


}


export default MultiplicaPor2;