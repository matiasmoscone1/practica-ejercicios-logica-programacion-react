
//14. Componente de Tarjeta Interactiva: Crea un componente de tarjeta que se pueda voltear 
//al hacer clic en ella. Debe mostrar información en el frente y en la parte posterior 
//de la tarjeta.

import { useState } from "react";

//creando componente
const TarjetaInteractiva = () => {

    //creando variable de estado que funciona como bandera (flag)
    const [toggle, setToggle] = useState(false);

    //Creando componente que renderiza la card
    const Tarjeta = () => {
        //si toggle es true, muestra un contenido
        if(toggle){
            return(<p style={{color:"red"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat aperiam
            corrupti, beatae ad esse! Atque ea ab sapiente nemo aliquam assumenda, ut esse alias? 
            Nemo cupiditate numquam aspernatur ipsum!</p>)
        }else{
            //si toggle es false, muestra otro contenido
            return( 
                <p style={{color:"green"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>)
    }}

    return(<>
    <div>
        <h2>14. Tarjeta Interactiva </h2>
        {/* Renderiza la card y en el boton se le setea a la variable toggle, cada vez
        que se clickee, el valor diferente a la que contenga toggle*/}
        <Tarjeta />
        <button onClick={() => { setToggle(!toggle)}}>Toggle</button>

        
    </div>    
    </>)


}


export default TarjetaInteractiva;



