
//21. Eliminar Duplicados: Escribe una función que tome un array y elimine los elementos 
//duplicados, devolviendo un nuevo array sin duplicados.

import { useState } from "react";


const EliminaDuplicados = () => {

    const array = [2,2,6,15,8,6,22,3,9,12,3,3];
    const [nuevoArray, setNuevoArray] = useState([]);


    const eliminaDuplicados = () => {
        //Rehacer funcion, no da resultado esperado
        const numeros = new Set();
        array.filter((num) => {
            numeros.add(num);
        });
        console.log(numeros);
        setNuevoArray(Array.from(numeros));
    }



    return(<>
    <div>
        <h2>21. Elimina duplicados de un array</h2>
        {`[${array.join(",")}]`}
        <button onClick={() => eliminaDuplicados()}>Eliminar Duplicados</button>
        {`[${nuevoArray.join(",")}]`}

    </div>
    </>)

}

export default EliminaDuplicados;

