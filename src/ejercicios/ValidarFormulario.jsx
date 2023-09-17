
import { useState } from "react";

//12. Validación de Formulario: Crea un formulario de registro que incluya campos para 
//nombre, correo electrónico y contraseña. Agrega validaciones para asegurarte 
//de que los datos ingresados sean válidos antes de enviar el formulario.


const ValidarFormulario = () => {

    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [email, setEmail] = useState("");

    const validaUsuario = /^[a-zA-Z0-9]{8,15}$/;
    const validaContra = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,15}$/
    const validaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    const checkUsuario = (usu) => {
        validaUsuario.test(usu) ? document.querySelector(".resultado-usuario").textContent = " Usuario validado con exito!!!"
                                    //console.log("Usuario validado con exito!!!")
                                : document.querySelector(".resultado-usuario").textContent = " Usuario no validado... (debe contener letras o numeros y un ragno entre 8 y 15 caracteres";
                                    //console.log("Usuario no validado... (debe contener letras o numeros y un ragno entre 8 y 15 caracteres");   
    }

    const checkContra = (con) => {
        validaContra.test(con) ? document.querySelector(".resultado-contrasena").textContent = " Contraseña validada con exito!!!" 
                                //console.log("Contraseña validada con exito!!!")
                               :  document.querySelector(".resultado-contrasena").textContent = " Contraseña no validada... (debe contener letras, numeros o simbolos y un ragno entre 8 y 15 caracteres";
                                //console.log("Contraseña no validada... (debe contener letras, numeros o simbolos y un ragno entre 8 y 15 caracteres");   
    }

    const checkEmail = (ema) => {
        validaEmail.test(ema) ? document.querySelector(".resultado-email").textContent = " Email validado con exito!!!"
                                //console.log("Email validado con exito!!!")
                              : document.querySelector(".resultado-email").textContent = " Email no validado... (debe tener formato asd@asd.asd";
                                //console.log("Email no validado... (debe tener formato asd@asd.asd"); 
       
    }

    const validarCompleto = (e) => {
        e.preventDefault();
        checkUsuario(usuario); 
        checkContra(contrasena);   
        checkEmail(email);
    }

    return(<>
    <div>
        <h2>12. Validar formulario </h2>
        <form>
            <button onClick={(e) => validarCompleto(e)}>Enviar</button><br/><br/>
            <label>Usuario </label>
            <input onChange={(e) => setUsuario(e.target.value)}/>
            <span className="resultado-usuario"></span><br/><br/>
            <label>Contraseña </label>
            <input onChange={(e) => setContrasena(e.target.value)}/>
            <span className="resultado-contrasena"></span><br/><br/>
            <label>Email </label>
            <input onChange={(e) => setEmail(e.target.value)}/>
            <span className="resultado-email"></span>{" "}        
        </form>
    </div>
    </>)

}

export default ValidarFormulario;



