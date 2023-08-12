

//5. Calculadora Simple: Crea un componente de React que funcione como una calculadora básica, 
//permitiendo realizar operaciones matemáticas simples.
import { useState } from "react";

const CalculadoraSimple = () => {

    const [primerNum, setPrimerNum] = useState(0);
    const [segundoNum, setSegundoNum] = useState(0);
    let resultado = 0;

    //console.log(primerNum);
    //console.log(segundoNum);

    const funcSumar = (a, b) => {
        resultado = a + b;
        console.log(resultado);
    }
    const funcRestar = (a, b) => {
        resultado = a - b;
        console.log(resultado);
    }
    const funcMultiplicar = (a, b) => {
        resultado = a * b;    
        console.log(resultado);
    }
    const funcDividir = (a, b) => {
        resultado = a / b;
        console.log(resultado);
    }


    return(
    <>
        <div>
            <h2>Ejercicio 5: Calculadora simple</h2>
            <button onClick={funcSumar(primerNum, segundoNum)}>Sumar</button>
            <button onClick={funcRestar(primerNum, segundoNum)}>Restar</button>
            <button onClick={funcMultiplicar(primerNum, segundoNum)}>Multiplicar</button>
            <button onClick={funcDividir(primerNum, segundoNum)}>Dividir</button><br/>
            <input type="number" onChange={(e) => {setPrimerNum(e.target.value)}}/>
            <input type="number" onChange={(e) => {setSegundoNum(e.target.value)}}/>
            <p>{}</p>
        </div>
    </>)

}


export default CalculadoraSimple;
