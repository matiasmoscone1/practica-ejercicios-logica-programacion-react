

//41. Hooks Personalizados: Crea un hook personalizado llamado useLocalStorage que permita 
//a los componentes almacenar y recuperar datos en el almacenamiento local del navegador 
//de manera transparente.

import e from "cors";
import { useState } from "react";

const HookPersonalizadoUseLocalStorage = () => {
    /*
    console.log(localStorage);

    const myData = {key: "value"};
    const myDato = {asd: "solidValue"};
    localStorage.setItem("valor", 123);
    localStorage.setItem("valorSolido", JSON.stringify(myDato));
    //localStorage.removeItem("Valor");

    //localStorage.clear();
    
    //console.log(localStorage.key(0));
    //localStorage.key()

    console.log(localStorage.getItem("valor"));*/

    const [nombre, setNombre] = useState(undefined);

    const useLocalStorage = () => {


    }

    const funcionEnviadora = (e) => {
        e.preventDefault()
    }


    console.log(nombre);



    return(<>
    <div>
        <h2>41. Hook personalizado almacenamiento local del navegador </h2>
        <form onSubmit={(e) => funcionEnviadora(e)}>
            <label>Nombre</label>{" "}
            <input onChange={(e) => setNombre(e.target.value)}/>
        </form>

    </div>
    </>)

}

export default HookPersonalizadoUseLocalStorage;

