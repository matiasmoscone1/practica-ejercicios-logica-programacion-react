

//5. Calculadora Simple: Crea un componente de React que funcione como una calculadora básica, 
//permitiendo realizar operaciones matemáticas simples.
import { useState } from "react";

//Creando componente 
const CalculadoraSimple = () => {

    //creando variables de estado
    const [primerNum, setPrimerNum] = useState(0);
    const [segundoNum, setSegundoNum] = useState(0);
    const [resultado, setResultado] = useState(0);

    //console.log(primerNum);
    //console.log(segundoNum);

    //Creando funcion sumar, toma como parametros dos numeros.
    const funcSumar = (a, b) => {
        setResultado(parseInt(a) + parseInt(b));
        //console.log(resultado);
    }
    //Creando funcion restar, toma como parametros dos numeros.
    const funcRestar = (a, b) => {
        setResultado(parseInt(a) - parseInt(b));
        //console.log(resultado);
    }
    //Creando funcion multiplicar, toma como parametros dos numeros.
    const funcMultiplicar = (a, b) => {
        setResultado(parseInt(a) * parseInt(b));    
        //console.log(resultado);
    }
    //Creando funcion dividir, toma como parametros dos numeros.
    const funcDividir = (a, b) => {
        setResultado(parseInt(a) / parseInt(b));
        //console.log(resultado);
    }


    return(
    <>
        <div>
            <h2>Ejercicio 5: Calculadora simple</h2>
            {/* Crea 4 botones con evento onClick y le pasa la respectiva funcion con los numeros
            que almacenaron en el input por el usuario */}
            <button onClick={() => {funcSumar(primerNum, segundoNum)}}>Sumar</button>
            <button onClick={() => {funcRestar(primerNum, segundoNum)}}>Restar</button>
            <button onClick={() => {funcMultiplicar(primerNum, segundoNum)}}>Multiplicar</button>
            <button onClick={() => {funcDividir(primerNum, segundoNum)}}>Dividir</button><br/>
            {/* Guarda automaticamente los numeros que vaya escribiendo en el input el usuario en las 
            variables de estado */}
            <input type="number" onChange={(e) => {setPrimerNum(e.target.value)}}/>
            <input type="number" onChange={(e) => {setSegundoNum(e.target.value)}}/>
            <p>{`El resultado es: ${resultado}`}</p>
        </div>
    </>)

}


export default CalculadoraSimple;
