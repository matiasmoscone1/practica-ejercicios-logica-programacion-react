

//34. Calcular el promedio: Dado un arreglo de números, utiliza reduce para calcular 
//el promedio de los valores en el arreglo.
import { useState } from "react";

//creando componente
const CalcularPromedioReduce = () => {

    //creando array numeros principal
    const arrayNumeros = [3, 6, 15 ,10, 16, 21, 33, 27, 28];

    //creando variable de estado llamada resultado, donde se almacenara el resultado final
    const [resultado, setResultado] = useState(null);
    
    //funcion que calcula el promedio de un array pasado por parametro, con la funcion reduce
    const calculaPromedio = (arr) => {
        //guardando en una constante el resultado de la funcion reduce
        const arrayReducido = arr.reduce((res, val) => {
            //por cada "iteracion", suma los valores actuales al parametro res, y los divide por
            //la cantidad de numeros que tiene el array pasado por parametro
            res += val / arr.length;
            //retorna res con el resultado final
            return res;
            //se inicializa res con valor 0
        },0);
        //seteando el resultado en la variable de estado
        setResultado(arrayReducido);
    }


    return(<>
    <div>
        <h2>34. Calcula el promedio de un array con reduce</h2>
        {/* Muestra el array de numeros en pantalla*/}
        <p>{`[${arrayNumeros.join(",")}]`}</p>
        {/* boton calcular llama a la funcion calculaPromedio y le pasa por parametro el array
        principal de numeros, boton limpiar, setea nuevamente la variable de estado en null*/}
        <button onClick={() => calculaPromedio(arrayNumeros)}>Calcular</button>{" "}
        <button onClick={() => setResultado(null)}>Limpiar</button>
        {/* operador ternario que si existe resultado, lo muestra en pantalla, sino no muestra nada */}
        <p>{resultado ? `Resultado: ${resultado}` : ""}</p>
    </div>
    </>)


}

export default CalcularPromedioReduce;

