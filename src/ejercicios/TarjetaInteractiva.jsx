
//14. Componente de Tarjeta Interactiva: Crea un componente de tarjeta que se pueda voltear 
//al hacer clic en ella. Debe mostrar información en el frente y en la parte posterior 
//de la tarjeta.

import { useState } from "react";

const TarjetaInteractiva = () => {

    const [toggle, setToggle] = useState(false);

    const cambiarTarjeta = () => {
        if(!toggle){
            setToggle(true);
        }else{
            setToggle(false);
        }          

    }

    const Tarjeta = () => {
        if(toggle){
            return(<p style={{color:"red"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat aperiam
            corrupti, beatae ad esse! Atque ea ab sapiente nemo aliquam assumenda, ut esse alias? 
            Nemo cupiditate numquam aspernatur ipsum!</p>)
        }else{
            return( 
                <p style={{color:"green"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>)
    }}

    return(<>
    <div>
        <h2>14. Tarjeta Interactiva </h2>
        
        <Tarjeta />
        <button onClick={() => { cambiarTarjeta()}}>Toggle</button>

        
    </div>    
    </>)


}


export default TarjetaInteractiva;



