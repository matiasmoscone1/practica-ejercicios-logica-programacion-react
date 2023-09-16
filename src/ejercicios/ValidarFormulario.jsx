import e from "cors";
import { useState } from "react";

//12. Validación de Formulario: Crea un formulario de registro que incluya campos para 
//nombre, correo electrónico y contraseña. Agrega validaciones para asegurarte 
//de que los datos ingresados sean válidos antes de enviar el formulario.


const ValidarFormulario = () => {

    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [email, setEmail] = useState("");

    const validaUsuario = /^[a-zA-Z0-9]{8,15}$/;
    //const validaContra = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*{8,15}$/
    //const validaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    const checkUsuario = (usu) => {
        validaUsuario.test(usu) ? console.log("Usuario validado con exito!!!")
                                : console.log("Usuario no validado... (debe contener letras o numeros y un ragno entre 8 y 15 caracteres");   
 
    }


    const validarCompleto = (e) => {
        e.preventDefault();
        checkUsuario(usuario);    
    }

    return(<>
    <div>
        <h2>12. Validar formulario </h2>
        <form>
            <label>Usuario </label>
            <input onChange={(e) => setUsuario(e.target.value)}/><br/><br/>
            <label>Contraseña </label>
            <input /><br/><br/>
            <label>Email </label>
            <input />{" "}
            <button onClick={(e) => validarCompleto(e)}>Enviar</button>
        </form>
    </div>
    </>)

}

export default ValidarFormulario;



