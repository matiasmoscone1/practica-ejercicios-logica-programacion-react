import { useReducer } from "react";

//40. Implementar un Contador con useReducer: Crea un contador que puede incrementar y 
//decrementar el valor utilizando el hook useReducer. Muestra el valor actual del 
//contador en el componente.


//creando componente principal del ejercicio
const ContadorUseReducer = () => {

    //inicializa el estado con un objeto q almacena una propiedad en 0
    const initialState = {contador: 0};

    //crea la funcion reductora, toma por parametro el estado actual y la accion
    const reducer = (state, action) => {
        //realiza swtich case, con el tipo de accion
        switch(action.type){
            //si es INCREMENT, devuelve el estado actual + el valor pasado por la accion
            case "INCREMENT":
                return {contador: state.contador + action.value};
            //si es RESET, devuelve el estado inicial (0)
            case "RESET":
                return initialState;    
            //si es DECREMENT, devuelve el estado actual - el valor pasado por la accion
            case "DECREMENT":
                return {contador: state.contador - action.value};
            //si no hace nada, devuelve el estado actual
            default:
                return state;
        }
    };

    //crea el hook useReducer, con el estado, la funcion dispatch (que enviara las acciones al
    //reducer), con los parametros reducer (la funcion reducer y su estado inicial)
    const [state, dispatch] = useReducer(reducer, initialState);
    
    
    const sumar = (num) => {dispatch({type: "INCREMENT", value: num})};
    const reset = () => {dispatch({type: "RESET"})};
    const restar = (num) => {dispatch({type: "DECREMENT", value: num})};

    return(<>
    <div>
        <h2>40. Contador con useReducer (hook useReducer)</h2>
        <button onClick={() => sumar(5)}>+5</button>{" "}
        <button onClick={() => sumar(1)}>+1</button>{" "}
        <button onClick={reset}>0</button>{" "}
        <button onClick={() => restar(1)}>-1</button>{" "}
        <button onClick={() => restar(5)}>-5</button>{" "}
        <p>Resultado: {state.contador}</p>
    </div>
    </>)


}


export default ContadorUseReducer;

