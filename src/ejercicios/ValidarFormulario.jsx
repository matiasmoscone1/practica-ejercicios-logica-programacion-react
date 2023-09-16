import { useState } from "react";

//12. Validación de Formulario: Crea un formulario de registro que incluya campos para 
//nombre, correo electrónico y contraseña. Agrega validaciones para asegurarte 
//de que los datos ingresados sean válidos antes de enviar el formulario.


const ValidarFormulario = () => {



    return(<>
    <div>
        <h2>12. Validar formulario </h2>
        <form>
            <label>Usuario </label>
            <input /><br/><br/>
            <label>Contraseña </label>
            <input /><br/><br/>
            <label>Email </label>
            <input />{" "}
            <button>Enviar</button>
        </form>
    </div>
    </>)

}

export default ValidarFormulario;



