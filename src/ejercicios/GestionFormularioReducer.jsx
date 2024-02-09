

//43. Gestión de formulario: Crea un formulario de React con varios campos (por ejemplo, 
//nombre, email, contraseña). Usa useReducer para gestionar el estado del formulario.
//Implementa la capacidad de manejar cambios en los campos y mostrar el estado del formulario.

import { useReducer } from "react";


const GestionFormularioReducer = () => {

    const initialState = {valor: ""};

    const reducer = (state, action) => {

        switch(action.type){
            case "CAMBIA":
                return {valor: state = action.value}
            }
    }



    const [state, dispatch] = useReducer(reducer, initialState);

    const cambiaValor = (valor) => {dispatch({type: "CAMBIA", value: valor})} 

    console.log(state);



    const submitButton = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return(<>
        <h2>43. Gestionador de formularios (useReducer)</h2>
        
        <form action="submit">
            <label>Nombre </label>
            <input type="text" onChange={(e) => {cambiaValor(e.target.value); console.log(e.target.value)}}/><br/><br/>
            <label>Apellido </label>
            <input type="text" onChange={(e) => {cambiaValor(e.target.value)}}/><br/><br/>
            <label>Email </label>
            <input type="text" onChange={(e) => {cambiaValor(e.target.value)}}/><br/><br/>
            <label>Numero </label>
            <input type="number" onChange={(e) => {cambiaValor(e.target.value)}}/><br/><br/>
            <button onClick={(e) => {submitButton(e)}}>Enviar</button>
        </form>



    </>)

}

export default GestionFormularioReducer;


