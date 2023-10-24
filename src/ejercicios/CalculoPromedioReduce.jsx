

//34. Calcular el promedio: Dado un arreglo de números, utiliza reduce para calcular 
//el promedio de los valores en el arreglo.
import { useState } from "react";

const CalcularPromedioReduce = () => {

    const arrayNumeros = [3, 6, 15 ,10, 16, 21, 33, 27, 28];

    const [resultado, setResultado] = useState(null);
    
    const calculaPromedio = (arr) => {
        const arrayReducido = arr.reduce((res, val) => {
            res += val / arr.length;
            console.log(res);
            return res;
        },0);
        //console.log(arrayReducido);
        setResultado(arrayReducido);
    }


    return(<>
    <div>
        <h2>34. Calcula el promedio de un array con reduce</h2>
        <p>{`[${arrayNumeros.join(",")}]`}</p>
        <button onClick={() => calculaPromedio(arrayNumeros)}>Calcular</button>{" "}
        <button>Limpiar</button>
        <p>{`Resultado: ${resultado}`}</p>
    </div>
    </>)


}

export default CalcularPromedioReduce;

