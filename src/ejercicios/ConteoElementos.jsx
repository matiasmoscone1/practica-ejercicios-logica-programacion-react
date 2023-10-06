
//22. Conteo de Elementos: Crea una función que cuente la cantidad de veces 
//que aparece un elemento específico en un array.

import { useState } from "react";

const ConteoElementos = () => {

    const array = ["asd", 1, {nombre: "matias", apellido: "moscone"}, 1, "asd", 34, false, 22,
    "asd", "55", true, "holabuenosdias", 1 ,"asd", 1, "55", 55];

    const [valueInput, setValueInput] = useState(null);
    const [contador, setContador] = useState(0);

    const contarElemento = (val) => {
        console.log(typeof val);
        let cont = 0;
        array.map((valor) => {
            if(typeof valor === typeof val && valor === val){
                cont += 1;
            }
            if(typeof valor === "number"){
                if(parseFloat(valor) === parseFloat(val)){
                    cont += 1;
                }
            }
        });        
        setContador(cont);
    }


    return(<>
    <div>
        <h2>22. Conteo de elemento especifico </h2>
        
        {`[${array.join(",")}]`}
        <br/><br/>
        <input onChange={(e) => setValueInput(e.target.value)}/>
        <br/><br/>
        <button onClick={() => contarElemento(valueInput)}>Contar</button>
        {contador}
    
    </div>
    </>)


}

export default ConteoElementos;
