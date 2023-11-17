

//39. Composición de Componentes Funcionales: Crea un formulario de registro que consista 
//en componentes funcionales separados para el nombre de usuario, la dirección de correo 
//electrónico y la contraseña. Estos componentes deben ser componibles y reutilizables.

import { useState } from "react"

const CompNombre = ({nombre, onNombreChange}) => {
    return(<><label>Nombre</label>{" "}<input type="text" value={nombre} onChange={(e) => onNombreChange(e.target.value)}/></>)
}

const CompApellido = () => {

    return(<><label>Apellido</label>{" "}<input type="text" /></>)
}

const CompEmail = () => {

    return(<><label>Email</label>{" "}<input type="text" /></>)
}

const CompTelefono = () => {

    return(<><label>Telefono</label>{" "}<input type="number" /></>)
}



const ComponenteFormulario = () => {

    const [nombre, setNombre] = useState(null);
    const [apellido, setApellido] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefono, setTelefono] = useState(null);


    const previeneSubmit = (e) => {
        e.preventDefault();
    }

    const envioUsuario = () => {
        return(<p>Usuario cargado</p>)
    }

    console.log(nombre);

    return(<>
    <div>
        <h2>39. Formulario con composicion de componentes funcionales</h2>
        <form onSubmit={(e) => previeneSubmit(e)}>
        <CompNombre nombre={nombre} onNombreChange={setNombre}/><br/><br/>
        <CompApellido /><br/><br/>
        <CompEmail /><br/><br/>
        <CompTelefono /><br/><br/>
        <button onClick={() => envioUsuario()}>Enviar</button>
        
        </form>
    </div>
    </>)


}

export default ComponenteFormulario;

