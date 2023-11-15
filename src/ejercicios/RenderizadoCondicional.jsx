
//38. Renderizado Condicional: Crea un componente funcional que tome un prop booleano 
//isLoggedIn. Si isLoggedIn es verdadero, renderiza un mensaje de bienvenida. 
//De lo contrario, muestra un formulario de inicio de sesión.

import { useEffect } from "react";
import { useState } from "react";

 //se pasa la prop como parametro al componente, y se destructura para poder usarla...
 const VerificaLogeo = ({flag}) => {
    useEffect(() => {
        if(flag === true){
            console.log("USUARIO LOGEADO CON EXITO");
        }else{
            console.log("USUARIO NO LOGEADO...");
        }
    }, [flag]);
}


const RenderizadoCondicional = () => {

    const [estado, setEstado] = useState(false);
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

   
    //console.log(estado);

    const sesion = (e) => {
        e.preventDefault();
   
    }

    const verificarUsuario = (usuario, contrasenia) => {
        const regExUsuario = /^[a-zA-Z0-9]{4,16}$/;
        const regExContrasenia = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,16}$/
        //console.log(usuario, contrasenia);

        regExUsuario.test(usuario) && regExContrasenia.test(contrasenia) ? setEstado(true) : console.log("Usuario o contraseña no validas");

    }

    
    

    return(<>
    <div>
        <h2>38. Verifica si el usuario es logeado o no</h2>
        
        <form onSubmit={(e) => sesion(e)}>
            <label>Usuario</label>{" "}
            <input type="text" onChange={(e) => setUser(e.target.value)}/>{" "}
            <label>Contraseña</label>{" "}
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>{" "}
            <br/><br/>
            <button onClick={() => verificarUsuario(user, password)}>Iniciar Sesion</button>{" "}
            <button onClick={() => setEstado(false)}>Cerrar Sesion</button>
        </form>
        <VerificaLogeo flag={estado}/>
    </div>
    </>)


}


export default RenderizadoCondicional;
