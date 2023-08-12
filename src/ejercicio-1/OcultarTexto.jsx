
//4. Mostrar/ocultar contenido: Crea un componente que incluya un botón y un párrafo de texto. 
//Al hacer clic en el botón, alterna la visibilidad del párrafo de texto entre 
//mostrarse y ocultarse.
import { useState } from "react";

const OcultarTexto = () => {

    const [texto, setTexto] = useState(""); 

    const toggleTexto = () => {
        
    };


    return(
        <>
        <div>
            
            <button onClick={toggleTexto()}>Switch</button>

        </div>
        </>
    )


}


export default OcultarTexto;






