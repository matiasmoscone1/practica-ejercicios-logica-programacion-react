

//39. Composición de Componentes Funcionales: Crea un formulario de registro que consista 
//en componentes funcionales separados para el nombre de usuario, la dirección de correo 
//electrónico y la contraseña. Estos componentes deben ser componibles y reutilizables.

import { useState } from "react"

const CompNombre = ({nombre, onNombreChange}) => {
    return(<><label>Nombre</label>{" "}<input type="text" value={nombre} onChange={(e) => onNombreChange(e.target.value)}/></>)
}

const CompApellido = ({apellido, onApellidoChange}) => {
    return(<><label>Apellido</label>{" "}<input type="text" value={apellido} onChange={(e) => onApellidoChange(e.target.value)}/></>)
}

const CompEmail = ({email, onEmailChange}) => {
    return(<><label>Email</label>{" "}<input type="text" value={email} onChange={(e) => onEmailChange(e.target.value)}/></>)
}

const CompTelefono = ({telefono, onTelefonoChange}) => {
    return(<><label>Telefono</label>{" "}<input type="number" value={telefono} onChange={(e) => onTelefonoChange(e.target.value)}/></>)
}



const ComponenteFormulario = () => {

    const [nombre, setNombre] = useState(undefined);
    const [apellido, setApellido] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [telefono, setTelefono] = useState(undefined);


    const previeneSubmit = (e) => {
        e.preventDefault();
    }

    const envioUsuario = () => {
        return(<p>Usuario cargado</p>)
    }

    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(email);


    return(<>
    <div>
        <h2>39. Formulario con composicion de componentes funcionales</h2>
        <form onSubmit={(e) => previeneSubmit(e)}>
        <CompNombre nombre={nombre} onNombreChange={setNombre}/><br/><br/>
        <CompApellido apellido={apellido} onApellidoChange={setApellido}/><br/><br/>
        <CompEmail email={email} onEmailChange={setEmail}/><br/><br/>
        <CompTelefono telefono={telefono} onTelefonoChange={setTelefono}/><br/><br/>
        <button onClick={() => envioUsuario()}>Enviar</button>
        
        </form>
    </div>
    </>)


}

export default ComponenteFormulario;

