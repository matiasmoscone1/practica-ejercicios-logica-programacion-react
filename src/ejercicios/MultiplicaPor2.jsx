
//17. Crea un componente de React que tome una lista de números y muestre una nueva 
//lista donde cada número sea multiplicado por 2.

import { useState } from "react";

//creando componente
const MultiplicaPor2 = () => {

    //creando array inicial de numeros
    const arrayNumeros = [12,6,8,23,3,17];

    //creando variable de estado que se inicializa con el array creado anteriormente
    const [resultado, setResultado] = useState(arrayNumeros);

    //creando funcion que multiplica cada numero del array dependiendo el valor que se le pase 
    //por parametro
    const multiplicarArray = (valor) => {
        //guardando en una variable el resultado de los numeros multiplicados en el array
        const nuevoArray = resultado.map((num) => num * valor);
        //seteando la variable de estado con el nuevo resultado
        setResultado(nuevoArray);

    }

    return(<>
    <div>
        <h2>17. Array multiplicado </h2>
        {/* Cada boton se le pasa un parametro con un valor diferente*/}
        <button onClick={() => multiplicarArray(2)}>x2</button>{" "}
        <button onClick={() => multiplicarArray(5)}>x5</button>{" "}
        <button onClick={() => multiplicarArray(10)}>x10</button><br/><br/>
        {/* Muestra el array */}
        <span>{`[${resultado}]`}</span>


    </div>
    
    </>)


}


export default MultiplicaPor2;