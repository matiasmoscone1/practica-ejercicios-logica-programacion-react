import { useReducer } from "react";

//40. Implementar un Contador con useReducer: Crea un contador que puede incrementar y 
//decrementar el valor utilizando el hook useReducer. Muestra el valor actual del 
//contador en el componente.

const ContadorUseReducer = () => {


    const initialState = {contador: 0};
    

    const [state, dispatch] = useReducer(reducer, initialState)
    


    return(<>
    <div>
        <h2>40. Contador con useReducer (hook useReducer)</h2>



    </div>
    </>)


}


export default ContadorUseReducer;

