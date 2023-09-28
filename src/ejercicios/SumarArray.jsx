
//15. Crea un componente de React que tome una lista de números y muestre 
//la suma de todos los elementos en la lista.

import { useState } from "react";
const SumarArray = () => {

    const array = [1,53,23,26,74,11,87];
    const [acumulador, setAcumulador] = useState(0);

    const suma = (arr) => {
        const nuevoArray = [...array];
        let resultado = 0;
        nuevoArray.map((num) => {
            resultado += num;
            //console.log(resultado);
            setAcumulador(resultado);
        }) 
        
    }

    return(<>
    <div>
        <h2>15. Summa de array completo</h2>
        <p>{`[${array.join(",")}]`}</p>
        <button onClick={suma}>Sumar</button>
        <button onClick={() => setAcumulador(0)}>Limpiar</button>
        <br/>
        <span>{acumulador}</span>
    </div>
    </>)

}

export default SumarArray;
