
//17. Crea un componente de React que tome una lista de números y muestre una nueva 
//lista donde cada número sea multiplicado por 2.

import { useState } from "react";

const MultiplicaPor2 = () => {

    const arrayNumeros = [12,6,8,23,3,17];

    const [resultado, setResultado] = useState(arrayNumeros);


    return(<>
    <div>
        <h2>17. Array multiplicado </h2>

        <button>x2</button>{" "}
        <button>x5</button>{" "}
        <button>x10</button><br/><br/>
        <span>{`[${resultado}]`}</span>


    </div>
    
    </>)


}


export default MultiplicaPor2;