

//43. Gestión de formulario: Crea un formulario de React con varios campos (por ejemplo, 
//nombre, email, contraseña). Usa useReducer para gestionar el estado del formulario.
//Implementa la capacidad de manejar cambios en los campos y mostrar el estado del formulario.

import { useReducer } from "react";


const GestionFormularioReducer = () => {

    const initialState = {valor: "", flag: false};

    const reducer = (state, action) => {

        
        switch(action.type){
            case "CAMBIA":
                return {...state, valor: state = action.value}
            case "BANDERA":
                return {...state, flag: action.flag}
            }


    }



    const [state, dispatch] = useReducer(reducer, initialState);

    
    const cambiaValor = (valor) => {dispatch({type: "CAMBIA", value: valor})} 

    const cambiaFlag = (booleano) => {dispatch({type: "BANDERA", flag: booleano})}

    const validaForm = (campo, valorInput) => {
        const regExNombreApellido = /^[a-zA-Z]{7,20}$/;
        const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const regExTelefono = /^[0-9]{9}$/;

        switch(campo){
            case "nombre":
                regExNombreApellido.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);                 
                break;
            case "apellido":
                regExNombreApellido.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);
                break;
            case "email":
                regExEmail.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);
                break;
            case "telefono":
                regExTelefono.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);
                break;
            }      
    }   
    

    console.log(state);

    console.log(state.flag);

    const submitButton = (e) => {
        e.preventDefault();
        console.log(state);
    }




    return(<>
        <h2>43. Gestionador de formularios (useReducer)</h2>
        
        <form action="submit">
            <label>Nombre </label>
            <input data="nombre" id="nombre" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("nombre", state);}}/>{(state.flag && document.getElementById("nombre")) ? null : <> Debe contener entre 8 y 20 caracteres...</>}<br/><br/>
            <label>Apellido </label>
            <input data="apellido" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("apellido", state);}}/>{state.flag ? null : <> Debe contener entre 8 y 20 caracteres...</>}<br/><br/>
            <label>Email </label>
            <input data="email" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("email", state);}}/>{state.flag ? null : <> Debe contener formato xxxx@xxxx.xxx</>}<br/><br/>
            <label>Numero </label>
            <input data="telefono" type="number" onChange={(e) => {cambiaValor(e.target.value); validaForm("telefono", state);}}/>{state.flag ? null : <> Debe contener 10 numeros</>}<br/><br/>
            <button onClick={(e) => {submitButton(e)}}>Enviar</button>
        </form>



    </>)

}

export default GestionFormularioReducer;


