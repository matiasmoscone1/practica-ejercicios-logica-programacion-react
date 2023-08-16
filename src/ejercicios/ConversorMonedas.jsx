

//6. Conversor de Moneda: Crea un componente de React que convierta una cantidad en una 
//moneda a otra moneda, utilizando tasas de cambio fijas.

//Importando hook useState
import { useState } from "react";

//Creando componente 
const ConversorMonedas = () => {

    //Creando variables de estado
    const [dolares, setDolares] = useState("");
    const [pesos, setPesos] = useState("");

    //funcion que toma el estado actual del input del dolar y setea los pesos haciendo el calculo
    const convertirDolares = (dol) => {
        setPesos(dol * 750);
    }
    //funcion que toma el estado actual del input del peso y setea los dolares haciendo el calculo
    const convertirPesos = (pes) => {
        setDolares(pes / 750);
    }

   
    return(<>
    <div>
        <h2>6. Conversor de monedas</h2>
        <br/>
        <label>USD </label>
        {/* Cada input refleja su valor de acuerdo a la variable de estado, si cambia ese valor
        actualiza automaticamente por el valor nuevo y llama a dicha funcion para que haga la
        conversion automatica de la moneda
        */}
        <input value={dolares} onChange={(e) => {
            const nuevosDolares = e.target.value;
            setDolares(nuevosDolares);
            convertirDolares(nuevosDolares);
        }}/>
        <label> ARS </label>
        <input value={pesos} onChange={(e) => {
            const nuevosPesos = e.target.value;
            setPesos(nuevosPesos);
            convertirPesos(nuevosPesos);
        }}/>
    </div>
    </>)


}


export default ConversorMonedas;

