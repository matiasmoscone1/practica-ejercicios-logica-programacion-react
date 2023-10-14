

//30. Eliminar Duplicados: Escribe una función que tome un array y elimine los elementos 
//duplicados, devolviendo un nuevo array sin duplicados.

import { useState } from "react";

//creando componente 
const DuplicadosReduce = () => {

    //creando array de numeros y variable de estado q almacenara el resultado
    const arrayNumeros = [3, 5, 16, 3, 32, 18, 3, 5, 22, 2, 7, 16, 73, 32];
    const [resultado, setResultado] = useState(null);

    //creando funcion que elimina los duplicados, se le pasa array de  num como parametros
    const eliminaReduce = (arr) => {

        //crea nuevo array para almacenar el numero reducido
        const nuevoArray = arr.reduce((list, val) => {
            //si en el parametro lista no esta incluido el valor actual, se agrega a la lista
            if(!list.includes(val)){
                list.push(val);
            }
            //retorna la lista
            return list;
        //se inicializa con un array vacio el parametro list
        }, []);

        //setea el resultado con el array reducido
        setResultado(nuevoArray);
    }

    

    return(<>
    <div>
        <h2>30. Elimina duplicados con funcion reduce</h2>
        {/* muestra el array de numeros por pantalla */}
        {`[${arrayNumeros.join(",")}]`}{" "}
        {/* Crea dos botones Elimina (llama a la funcion reductora) y Limpiar (setea nuevamente
            la variable de estado en null para q no aparezca nada en pantalla) */}
        <button onClick={() => eliminaReduce(arrayNumeros)}>Eliminar</button>{" "}
        <button onClick={() => setResultado(null)}>Limpiar</button>{" "}
        {/* operador ternario que si existe resultado, lo muestra en pantalla, sino muestra
            cadena vacia */}
        {resultado ? `[${resultado}]` : ""}


    </div>
    </>)

}

export default DuplicadosReduce;
