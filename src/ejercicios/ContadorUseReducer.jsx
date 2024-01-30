import { useReducer } from "react";

//40. Implementar un Contador con useReducer: Crea un contador que puede incrementar y 
//decrementar el valor utilizando el hook useReducer. Muestra el valor actual del 
//contador en el componente.

const ContadorUseReducer = () => {

    const initialState = {contador: 0};

    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return {contador: state.contador + action.value};
            case "RESET":
                return initialState;    
            case "DECREMENT":
                return {contador: state.contador - action.value};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const sumar = () => {dispatch({type: "INCREMENT", value: 1})};
    const reset = () => {dispatch({type: "RESET"})};
    const restar = () => {dispatch({type: "DECREMENT", value: 1})};

    return(<>
    <div>
        <h2>40. Contador con useReducer (hook useReducer)</h2>
        <button onClick={sumar}>+1</button>{" "}
        <button onClick={reset}>0</button>{" "}
        <button onClick={restar}>-1</button>{" "}
        <p>Resultado: {state.contador}</p>
    </div>
    </>)


}


export default ContadorUseReducer;

