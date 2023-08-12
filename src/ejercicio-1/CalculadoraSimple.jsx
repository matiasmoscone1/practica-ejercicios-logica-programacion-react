

//5. Calculadora Simple: Crea un componente de React que funcione como una calculadora básica, 
//permitiendo realizar operaciones matemáticas simples.
import { useState } from "react";

const CalculadoraSimple = () => {

    const [primerNum, setPrimerNum] = useState(0);
    const [segundoNum, setSegundoNum] = useState(0);
    let resultado = 0;

    console.log(primerNum);
    console.log(segundoNum);

    resultado = parseInt(primerNum) + parseInt(segundoNum);

    console.log(resultado);
    return(
    <>
        <div>
            <h2>Ejercicio 5: Calculadora simple</h2>
            <button>Sumar</button><br/>
            <input type="number" onChange={(e) => {setPrimerNum(e.target.value)}}/>
            <input type="number" onChange={(e) => {setSegundoNum(e.target.value)}}/>
            <p>{}</p>
        </div>
    </>)

}


export default CalculadoraSimple;
