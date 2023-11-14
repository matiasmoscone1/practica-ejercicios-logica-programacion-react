
//38. Renderizado Condicional: Crea un componente funcional que tome un prop booleano 
//isLoggedIn. Si isLoggedIn es verdadero, renderiza un mensaje de bienvenida. 
//De lo contrario, muestra un formulario de inicio de sesión.

import { useState } from "react";


const RenderizadoCondicional = () => {

    const [estado, setEstado] = useState(false);

    const VerificaLogeo = (flag) => {
        
        console.log(flag);
    }





    return(<>
    <div>
        <h2>38. Verifica si el usuario es logeado o no</h2>
        <VerificaLogeo estado={estado}/>
    
    </div>
    </>)


}


export default RenderizadoCondicional;

