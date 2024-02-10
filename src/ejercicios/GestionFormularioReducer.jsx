

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

    const validaForm = (campo, valorInput) => {
        const regExNombre = /^[a-zA-Z]{8,20}$/;

        switch(campo){
            case "nombre":
                regExNombre.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");
            }
            case "apellido":
                regExNombre.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");
            }       
    }

    console.log(state);



    const submitButton = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return(<>
        <h2>43. Gestionador de formularios (useReducer)</h2>
        
        <form action="submit">
            <label>Nombre </label>
            <input data="nombre" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("nombre", state); console.log(e.target.value)}}/><br/><br/>
            <label>Apellido </label>
            <input data="apellido" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("apellido", state);}}/><br/><br/>
            <label>Email </label>
            <input data="email" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("email", state);}}/><br/><br/>
            <label>Numero </label>
            <input data="telefono" type="number" onChange={(e) => {cambiaValor(e.target.value); validaForm("telefono", state);}}/><br/><br/>
            <button onClick={(e) => {submitButton(e)}}>Enviar</button>
        </form>



    </>)

}

export default GestionFormularioReducer;


