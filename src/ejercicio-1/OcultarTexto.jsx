
//4. Mostrar/ocultar contenido: Crea un componente que incluya un botón y un párrafo de texto. 
//Al hacer clic en el botón, alterna la visibilidad del párrafo de texto entre 
//mostrarse y ocultarse.
import { useState } from "react";

const OcultarTexto = () => {

    const [texto, setTexto] = useState(""); 
    const [flag, setFlag] = useState(false);

    const toggleTexto = () => {
        if(!flag){
            setFlag(true);
            return(<p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus rem 
                voluptas perspiciatis quisquam corporis doloremque magnam repudiandae 
                cupiditate culpa pariatur aliquid tempore sapiente tempora asperiores, 
                maiores, inventore iusto. Vel, est.
            </p>);
        }
        if(flag){
            setFlag(false);
            return(<p></p>);
        }
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






