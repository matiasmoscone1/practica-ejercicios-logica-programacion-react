
//38. Renderizado Condicional: Crea un componente funcional que tome un prop booleano 
//isLoggedIn. Si isLoggedIn es verdadero, renderiza un mensaje de bienvenida. 
//De lo contrario, muestra un formulario de inicio de sesión.


import { useState } from "react";

 //se pasa la prop como parametro al componente, y se destructura para poder usarla...
const VerificaLogeo = ({flag}) => {
    //si flag es true, el usuario queda logueado con exito
    if(flag){
        return(<><p>Usuario Logueado con exito!!!</p></>)
        //sino no se loguea
    }else{
        return(<><p>Usuario no Logueado...</p></>)
    }
}

//componente que se llama cuando el usuario o contraseña es incorrecto (no pasa las verificaciones
//de las expresiones regulares)
const ComponenteEstado = () => {
    return(<><p>Usuario o contraseña no validas...</p></>);
}


//componente principal
const RenderizadoCondicional = () => {

    //creando las variables de estado
    const [estado, setEstado] = useState(false);
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [noValida, setNoValida] = useState(false);
   
  //creando funcion que se llama con el evento submit del formulario, para prevenir que se envien
  //datos cada vez que pase algo en el form
    const sesion = (e) => {
        e.preventDefault();
    }

    //funcion que verifica el usuario y la contraseña que se le pasan por parametros
    const verificarUsuario = (usuario, contrasenia) => {
        //se crea expresion regular para el usuario y para la contraseña
        const regExUsuario = /^[a-zA-Z0-9]{4,16}$/;
        const regExContrasenia = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,16}$/
       
        //si el usuario y la contraseña pasan las validaciones de las expresiones regulares
        if(regExUsuario.test(usuario) && regExContrasenia.test(contrasenia)){
            //setea el estado en true y el novalida en false
            setEstado(true);
            setNoValida(false);
        }else{
            //si alguna de las dos o las dos fallan, setea el estado en false y el novalida en true
            setEstado(false);
            setNoValida(true);
        }

    }

    

    return(<>
    <div>
        <h2>38. Verifica si el usuario es logeado o no</h2>
        {/* Formulario que cada vez q se envia algo llama a la funcion sesion para frenar el evento */}
        <form onSubmit={(e) => sesion(e)}>
            {/* los inputs van guardando el estado del usuario y la contraseña en una variable de estado */}
            <label>Usuario</label>{" "}
            <input type="text" onChange={(e) => setUser(e.target.value)}/>{" "}
            <label>Contraseña</label>{" "}
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>{" "}
            <br/><br/>
            {/* Cada boton llama a su funcion correspondiente para iniciar sesion (verifica el user y pass)
            con los parametros adecuados y el cerrar sesion, setea simplemente el estado en false */}
            <button onClick={() => verificarUsuario(user, password)}>Iniciar Sesion</button>{" "}
            <button onClick={() => setEstado(false)}>Cerrar Sesion</button>
        </form>
        {/* Renderiza el componente VerificaLogeo y se le pasa como prop la variable de estado "estado" */}
        <VerificaLogeo flag={estado}/>
        {/* Si noValida existe, renderiza el componente "ComponenteEstado" que basicamente es porque
        se ingreso mal el usuario o la contraseña */}
        {noValida && <ComponenteEstado />}
        
        
    </div>
    </>)


}


export default RenderizadoCondicional;

