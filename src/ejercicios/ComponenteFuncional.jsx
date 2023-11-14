
//37. Componentes Funcionales: Crea un componente funcional de React que reciba un 
//array de números como propiedades y renderice la suma de esos números.

import { useState } from "react";


const ComponenteFuncional = (arrayNum) => {

    //creando variable de estado donde almacenara el resultado
    const [resultado, setResultado] = useState(null);

    //creando funcion que suma los componentes del arreglo
    const sumaArray = (arreglo) => {
        //inicializa acumulador en 0
        let acc = 0;
        //recorre el arreglo y va sumando cada valor en la variable acumulador
        arreglo.arr.map((val) => acc += val);        
        //almacena el resultado en la variable de estado creada anteriormente
        setResultado(acc);
    }

   

    //crea funcion que limpia el resultado
    const limpiaResultado = () => {
        //setea resultado a null
        setResultado(null);
    }

    return(<>
    <div>
        <h2>37. Componente funcional con props</h2>
        {/* Muestra el array de numeros principal pasado como prop */}
        {`[${arrayNum.arr.join(",")}]`}<br/><br/>
        {/* Botones que llaman a sus respectivas funciones */}
        <button onClick={() => sumaArray(arrayNum)}>Calcular</button>{" "}
        <button onClick={() => limpiaResultado()}>Limpiar</button><br/><br/>
        {/* si existe resultado, lo muestra en pantala, sino no muestra nada */}
        {resultado ? `El resultado es: ${resultado}` : ""}
    </div>
    </>)

}

export default ComponenteFuncional;
