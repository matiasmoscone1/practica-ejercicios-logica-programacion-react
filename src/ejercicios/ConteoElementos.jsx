
//22. Conteo de Elementos: Crea una función que cuente la cantidad de veces 
//que aparece un elemento específico en un array.

import { useState } from "react";

//creando componente
const ConteoElementos = () => {

    //creando array de distinto tipos de valores
    const array = ["asd", 1, {nombre: "matias", apellido: "moscone"}, 1, "asd", 34, false, 22,
    "asd", "55", true, "holabuenosdias", 1 ,"asd", 1, "55", 55];

    //creando variables de estado, el valor del input que se actualiza cuando escribe el usuario
    //en respectivo input y el contador que almacenara la cantidad de veces que aparecio el valor
    //en el array
    const [valueInput, setValueInput] = useState(null);
    const [contador, setContador] = useState(0);

    //creando funcion que cuenta el elemento, se pasa por parametro el valor del input
    const contarElemento = (val) => {
        //console.log(typeof val);
        //se crea una variable contador dentro de la funcion con valor 0
        let cont = 0;
        //se recorre el array completo y por cada elemento, va comparando si es un string del
        //mismo tipo y existe el elemento, se agrega 1 a la variable cont
        array.map((valor) => {
            if(typeof valor === typeof val && valor === val){
                cont += 1;
            }
            //si el valor es de tipo numero
            if(typeof valor === "number"){
                //si el valor coincide con el elemento dentro del array se agrega 1 a la variable cont
                if(parseFloat(valor) === parseFloat(val)){
                    cont += 1;
                }
            }
        });        
        //setea la variable de estado al final con la variable cont creada previamente dentro
        //de la funcion
        setContador(cont);
    }


    return(<>
    <div>
        <h2>22. Conteo de elemento especifico </h2>
        {/* Muestra el array de distintos tipos de elementos */}        
        {`[${array.join(",")}]`}
        <br/><br/>
        {/* Input donde el usuario escribe y se guarda en la variable de estado lo que va
        escribiendo */}
        <input onChange={(e) => setValueInput(e.target.value)}/>
        <br/><br/>
        {/* Boton contar que al hacerle click llama la funcion contarElementos y le pasa por
        parametro el valor del input */}
        <button onClick={() => contarElemento(valueInput)}>Contar</button>{" "}
        {/* Muestra el resultado en pantalla */}
        {contador}
    
    </div>
    </>)


}

export default ConteoElementos;
