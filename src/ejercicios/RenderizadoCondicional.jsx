
//38. Renderizado Condicional: Crea un componente funcional que tome un prop booleano 
//isLoggedIn. Si isLoggedIn es verdadero, renderiza un mensaje de bienvenida. 
//De lo contrario, muestra un formulario de inicio de sesión.

import { useState } from "react";


const RenderizadoCondicional = () => {

    const [estado, setEstado] = useState(false);
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const VerificaLogeo = (flag) => {
        
        console.log(flag);
    }




    const sesion = (e) => {
        e.preventDefault();
        console.log("USUARIO LOGEADO!!!");
    }

    return(<>
    <div>
        <h2>38. Verifica si el usuario es logeado o no</h2>
        <VerificaLogeo estado={estado}/>
        <form onSubmit={() => sesion()}>
            <label>Usuario</label>
            <input type={text} onChange={(e) => setUser(e.target.value)}/>
            <label>Contraseña</label>
            <input type={text} onChange={(e) => setPassword(e.target.value)}/>
            
        </form>
    </div>
    </>)


}


export default RenderizadoCondicional;

