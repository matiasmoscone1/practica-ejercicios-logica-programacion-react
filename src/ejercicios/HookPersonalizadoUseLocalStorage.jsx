

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

    const useLocalStorage = (valor, accion) => {

    
        switch(accion){
            case "agregar":
                localStorage.setItem("Nombre", valor);
                break;
            case "obtener":
                return localStorage.getItem("Nombre");
            default:
                break;
        }

    }

    const funcionEnviadora = (e) => {
        e.preventDefault()

        useLocalStorage(nombre, "agregar");

        console.log(localStorage);
        const nombreAlmacenado = useLocalStorage(null ,"obtener");
        console.log("Nombre almacenado: ", nombreAlmacenado);

        setNombre("");
        //console.log(nombre);
        //console.log(localStorage);
        
    }


    
    

    return(<>
    <div>
        <h2>41. Hook personalizado almacenamiento local del navegador </h2>
        <form onSubmit={(e) => funcionEnviadora(e)}>
            <label>Nombre</label>{" "}
            <input onChange={(e) => setNombre(e.target.value)}/><br/><br/>
            <button>Enviar</button>
        </form>

    </div>
    </>)

}

export default HookPersonalizadoUseLocalStorage;

