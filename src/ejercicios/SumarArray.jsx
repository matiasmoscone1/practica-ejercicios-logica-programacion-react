
//15. Crea un componente de React que tome una lista de números y muestre 
//la suma de todos los elementos en la lista.

import { useState } from "react";

//creando componente
const SumarArray = () => {

    //creando array de numeros
    const array = [1,53,23,26,74,11,87];
    //creando variable de estado donde almacenara el valor final de la suma
    const [acumulador, setAcumulador] = useState(0);

    //creando funcion suma
    const suma = () => {
        //clona el array de numeros para poder iterarlo
        const nuevoArray = [...array];
        //se crea variable resultado e inicializa en 0
        let resultado = 0;
        //se itera el array clonado
        nuevoArray.map((num) => {
            //se le suma a la variable resultado, todos los valores iterados
            resultado += num;
            //console.log(resultado);
            //se setea la variable de estado acumulador con el valor final
            setAcumulador(resultado);
        }) 
        
    }

    return(<>
    <div>
        <h2>15. Summa de array completo</h2>
        {/* Se muestra el array completo en el DOM */}
        <p>{`[${array.join(",")}]`}</p>
        {/* Para cada boton se realiza la escucha de un evento click y se llama a la funcion suma
        y en el otro vuelve la variable de estado a 0*/}
        <button onClick={suma}>Sumar</button>
        <button onClick={() => setAcumulador(0)}>Limpiar</button>
        <br/>
        {/* Muestra el resultado */}
        <span>{acumulador}</span>
    </div>
    </>)

}

export default SumarArray;
