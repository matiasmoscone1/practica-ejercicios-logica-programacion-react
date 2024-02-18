

//43. Gestión de formulario: Crea un formulario de React con varios campos (por ejemplo, 
//nombre, email, contraseña). Usa useReducer para gestionar el estado del formulario.
//Implementa la capacidad de manejar cambios en los campos y mostrar el estado del formulario.

import { useReducer } from "react";

//creando componente principal
const GestionFormularioReducer = () => {

    //inicializando el estado
    const initialState = {valor: "", flag: false};

    //creando funcion reductora, se le pasa el estado global y la accion
    const reducer = (state, action) => {
        //para cada tipo de accion
        switch(action.type){
            case "CAMBIA":
                //retorna el estado y se le actualiza el valor
                return {...state, valor: state = action.value}
            case "BANDERA":
                //retorna el estado y se le actualiza la flag
                return {...state, flag: action.flag}
            }
    }


    //creando el useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    //funcion que dispara el reducer para cambiar el valor del estado    
    const cambiaValor = (valor) => {dispatch({type: "CAMBIA", value: valor})} 

    //funcion que dispara el reducer para cambiar la bandera del estado
    const cambiaFlag = (booleano) => {dispatch({type: "BANDERA", flag: booleano})}

    //creando funcion que valida el formulario, se le pasa por parametro el campo a validar y el valor del input
    const validaForm = (campo, valorInput) => {
        //expresiones regulares para validar todos los campos
        const regExNombreApellido = /^[a-zA-Z]{7,20}$/;
        const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const regExTelefono = /^[0-9]{9}$/;

        //para cada campo se lo valida de acuerdo a la expresion regular correspondiente
        switch(campo){
            case "nombre":
                //si valida el input, llama a la funcion cambiaFlag y le pasa por parametro true, sino le pasa false
                regExNombreApellido.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);                 
                break;
            case "apellido":
                //si valida el input, llama a la funcion cambiaFlag y le pasa por parametro true, sino le pasa false
                regExNombreApellido.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);
                break;
            case "email":
                //si valida el input, llama a la funcion cambiaFlag y le pasa por parametro true, sino le pasa false
                regExEmail.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);
                break;
            case "telefono":
                //si valida el input, llama a la funcion cambiaFlag y le pasa por parametro true, sino le pasa false
                regExTelefono.test(valorInput.valor) ? cambiaFlag(true) : cambiaFlag(false);
                break;
            }      
    }   
    

    //console.log(state);

    //console.log(state.flag);

    const submitButton = (e) => {
        e.preventDefault();
        //console.log(state);
    }




    return(<>
        <h2>43. Gestionador de formularios (useReducer)</h2>
        
        {/* A cada input se le llama la funcion que cambia valor, la funcion que valida el form y 
        tambien con un operador ternario se verifica si la bandera esta en true, se le saca el
        texto informativo al lado del input */}
        <form action="submit">
            <label>Nombre </label>
            {/*<input data="nombre" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("nombre", state);}}/>{(state.flag && document.getElementById("nombre")) ? null : <> Debe contener entre 8 y 20 caracteres...</>}<br/><br/>*/}
            <input data="nombre" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("nombre", state);}}/>{state.flag && !state.nombre ? null : <> Debe contener entre 8 y 20 caracteres...</>}<br/><br/> 
            <label>Apellido </label>
            <input data="apellido" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("apellido", state);}}/>{(state.flag && document.getElementById("apellido")) ? null : <> Debe contener entre 8 y 20 caracteres...</>}<br/><br/>
            <label>Email </label>
            <input data="email" type="text" onChange={(e) => {cambiaValor(e.target.value); validaForm("email", state);}}/>{(state.flag && document.getElementById("email")) ? null : <> Debe contener formato xxxx@xxxx.xxx</>}<br/><br/>
            <label>Numero </label>
            <input data="telefono" type="number" onChange={(e) => {cambiaValor(e.target.value); validaForm("telefono", state);}}/>{(state.flag && document.getElementById("telefono")) ? null : <> Debe contener 10 numeros</>}<br/><br/>
            <button onClick={(e) => {submitButton(e)}}>Enviar</button>
        </form>



    </>)

}

export default GestionFormularioReducer;


