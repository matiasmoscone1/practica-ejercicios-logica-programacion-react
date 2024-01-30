import { useReducer } from "react";

//40. Implementar un Contador con useReducer: Crea un contador que puede incrementar y 
//decrementar el valor utilizando el hook useReducer. Muestra el valor actual del 
//contador en el componente.

const ContadorUseReducer = () => {

    const initialState = {contador: 0};

    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return {contador: state.contador + 1};
            case "DECREMENT":
                return {contador: state.contador - 1};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const sumar = dispatch({value: 1}, "INCREMENT");


    return(<>
    <div>
        <h2>40. Contador con useReducer (hook useReducer)</h2>
        <button>+1</button>{" "}
        <button>0</button>{" "}
        <button>-1</button>{" "}
        <p>Resultado: {state.contador}</p>
    </div>
    </>)


}


export default ContadorUseReducer;

