

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
        const regExNombreApellido = /^[a-zA-Z]{7,20}$/;
        const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const regExTelefono = /^[0-9]{9}$/;

        switch(campo){
            case "nombre":
                //regExNombreApellido.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");
                //regExNombreApellido.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");
                if(regExNombreApellido.test(valorInput.value)){
                    return(<>
                        <p>No pasa... (debe tener entre 8 y 20 caracteres)</p>
                    </>)
                }else{
                    return(<>
                        <p>Pasa!!!</p>
                    </>)
                }
            case "apellido":
                regExNombreApellido.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");
            case "email":
                regExEmail.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");             
            case "telefono":
                regExTelefono.test(valorInput.valor) ? console.log("Pasa!!!") : console.log("NO PASA...");
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


