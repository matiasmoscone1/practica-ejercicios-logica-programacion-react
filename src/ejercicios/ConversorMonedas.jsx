

//6. Conversor de Moneda: Crea un componente de React que convierta una cantidad en una 
//moneda a otra moneda, utilizando tasas de cambio fijas.

import { useState } from "react";

const ConversorMonedas = () => {

    
    const [dolares, setDolares] = useState(0);
    const [pesos, setPesos] = useState(0);


    const convertirDolares = (dol) => {
        setPesos(dol * 750);
    }

    const convertirPesos = (pes) => {
        setDolares(pes / 750)
    }


    return(<>
    <div>
        <h2>6. Conversor de monedas</h2>
        <br/>
        <label>USD </label>
        <input value={dolares} onChange={(e) => {
            setDolares(e.target.value);
            convertirDolares(dolares);
        }}/>
        <label> ARS </label>
        <input value={pesos} onChange={(e) => {
            setPesos(e.target.value);
            convertirPesos(pesos);
        }}/>
    </div>
    </>)


}


export default ConversorMonedas;

