
//4. Mostrar/ocultar contenido: Crea un componente que incluya un botón y un párrafo de texto. 
//Al hacer clic en el botón, alterna la visibilidad del párrafo de texto entre 
//mostrarse y ocultarse.
import { useState } from "react";

//Creando componente
const OcultarTexto = () => {

    //Creando variable de estado, estilo bandera (booleano)
    const [flag, setFlag] = useState(false);

    //Creando funcion que cambia el estado de la variable creada anteriormente
    const toggleTexto = () => {
        setFlag(!flag);
    }


    return(
        <>
        <div>
            <h2>Ejercicio 4: Ocultar/Mostrar texto</h2>
            <button onClick={toggleTexto}>Switch</button>
            {//si flag es true, imprime el texto
            flag && (<p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus rem 
                voluptas perspiciatis quisquam corporis doloremque magnam repudiandae 
                cupiditate culpa pariatur aliquid tempore sapiente tempora asperiores, 
                maiores, inventore iusto. Vel, est.
            </p>)}
        </div>
        </>
    )


}


export default OcultarTexto;






