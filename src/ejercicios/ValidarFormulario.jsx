
import { useState } from "react";

//12. Validación de Formulario: Crea un formulario de registro que incluya campos para 
//nombre, correo electrónico y contraseña. Agrega validaciones para asegurarte 
//de que los datos ingresados sean válidos antes de enviar el formulario.

//creando componente
const ValidarFormulario = () => {

    //creando variables de estado que almacenara el estado actual de cada variable
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [email, setEmail] = useState("");

    //creando expresiones regulares para hacer validaciones
    const validaUsuario = /^[a-zA-Z0-9]{8,15}$/;
    const validaContra = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,15}$/
    const validaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    //creando funcion que valida el usuario
    const checkUsuario = (usu) => {
        //se valida la expresion regular con la variable usuario que se le pasa por parametro 
        validaUsuario.test(usu) ? document.querySelector(".resultado-usuario").textContent = " Usuario validado con exito!!!"
                                    //console.log("Usuario validado con exito!!!")
                                : document.querySelector(".resultado-usuario").textContent = " Usuario no validado... (debe contener letras o numeros y un ragno entre 8 y 15 caracteres";
                                    //console.log("Usuario no validado... (debe contener letras o numeros y un ragno entre 8 y 15 caracteres");   
    }

    //creando funcion que valida la contraseña
    const checkContra = (con) => {
         //se valida la expresion regular con la variable contraseña que se le pasa por parametro 
        validaContra.test(con) ? document.querySelector(".resultado-contrasena").textContent = " Contraseña validada con exito!!!" 
                                //console.log("Contraseña validada con exito!!!")
                               :  document.querySelector(".resultado-contrasena").textContent = " Contraseña no validada... (debe contener letras, numeros o simbolos y un ragno entre 8 y 15 caracteres";
                                //console.log("Contraseña no validada... (debe contener letras, numeros o simbolos y un ragno entre 8 y 15 caracteres");   
    }

    //creando funcion que valida el email
    const checkEmail = (ema) => {
         //se valida la expresion regular con la variable email que se le pasa por parametro 
        validaEmail.test(ema) ? document.querySelector(".resultado-email").textContent = " Email validado con exito!!!"
                                //console.log("Email validado con exito!!!")
                              : document.querySelector(".resultado-email").textContent = " Email no validado... (debe tener formato asd@asd.asd";
                                //console.log("Email no validado... (debe tener formato asd@asd.asd"); 
       
    }
    
    //funcion que al clickea el boton dentro del form, llama a las 3 funciones especificas para validar
    const validarCompleto = (e) => {
        //previene el comportamiento por default del submit para que no envie nada
        e.preventDefault();
        checkUsuario(usuario); 
        checkContra(contrasena);   
        checkEmail(email);
    }

    return(<>
    <div>
        <h2>12. Validar formulario </h2>
        <form>
            {/* Form completo con inputs que a medida que se van escribiendo, van seteando la variable
            correspondiente para luego ser utilizada. Se crea la etiqueta span y se injecta javascript puro
            para mostrar el resultado en el DOM*/}
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

//exporta por default el componente ValidarFormulario
export default ValidarFormulario;



