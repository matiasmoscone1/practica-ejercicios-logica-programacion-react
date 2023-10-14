

//30. Eliminar Duplicados: Escribe una función que tome un array y elimine los elementos 
//duplicados, devolviendo un nuevo array sin duplicados.

import { useState } from "react";


const DuplicadosReduce = () => {

    const arrayNumeros = [3, 5, 16, 3, 32, 18, 3, 5, 22, 2, 7, 16, 73, 32];
    const [resultado, setResultado] = useState(null);

    const eliminaReduce = (arr) => {

        const nuevoArray = arr.reduce((list, val) => {
            if(!list.includes(val)){
                list.push(val);
            }
            return list;
        }, []);

        setResultado(nuevoArray);
    }

    

    return(<>
    <div>
        <h2>30. Elimina duplicados con funcion reduce</h2>

        {`[${arrayNumeros.join(",")}]`}{" "}
        <button onClick={() => eliminaReduce(arrayNumeros)}>Eliminar</button>{" "}
        <button onClick={() => setResultado(null)}>Limpiar</button>{" "}
        {resultado ? `[${resultado}]` : ""}


    </div>
    </>)

}

export default DuplicadosReduce;
