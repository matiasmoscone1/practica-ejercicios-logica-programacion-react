

//31. Conteo de Elementos: Crea una función que cuente la cantidad de veces que aparece 
//un elemento específico en un array.

import { useState } from "react";

//creando componente
const CuentaElementoReduce = () => {

    //creando array numeros y variables de estado
    const arrayNumeros = [2, 43, 2, 58, 2, 53, 33, 16, 2, 53, 10, 2, 53, 43, 5, 5, 53];
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState(null);


    //creando funcion reductora, se pasa el array y el valor a chequear cuantas veces se repite
    const cuentaElementosRepetidos = (arr, num) => {

        //crea nuevo array con la funcion reduce, "cont" equivale al contador y val el valor actual
        const arrayReducido = arr.reduce((cont, val) => {
            //si valor actual es igual al numero pasado por parametro en la funcion
            if(val == num){
                //agrega uno al contador
                cont += 1;
            }
            //devuelve el contador
            return cont;
        //se inicializa el contador en 0
        }, 0);

        //setea el resultado con el valor del array reducido
        setResultado(arrayReducido);

    }


    return(<>
    <div>
        <h2>31. Cuenta elemento repetido con reduce</h2>
        {/* Muestra array inicial en pantalla */}        
        {`[${arrayNumeros.join(",")}]`}<br/><br/>
        {/* Input que guarda el valor ingresado por el usuario. Botones que llaman a sus 
        respectivas funciones */}
        <input type="number" placeholder={"Escribe el numero"} onChange={(e) => setNumero(e.target.value)}/>{" "}    
        <button onClick={() => cuentaElementosRepetidos(arrayNumeros, numero)}>Contar</button>{" "}
        <button onClick={() => setResultado(null)}>Limpiar</button>{" "}
        {/* muestra el resultado en pantalla */}
        {resultado}
        

    </div>
    </>)

}

export default CuentaElementoReduce;
