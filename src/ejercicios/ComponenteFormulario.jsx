

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

const RenderizaUsuarios = ({nom, ape, ema, tel}) => {
    //console.log(nom,ape,ema,tel);
    return(<><table border={1}>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Email</td>
                    <td>Telefono</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nom}</td>
                    <td>{ape}</td>
                    <td>{ema}</td>
                    <td>{tel}</td>
                </tr>
            </tbody>
        </table></>);
}


const ComponenteFormulario = () => {

    const [nombre, setNombre] = useState(undefined);
    const [apellido, setApellido] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [telefono, setTelefono] = useState(undefined);
    const [listaUsuarios, setListaUsuarios] = useState([]);

    const previeneSubmit = (e) => {
        e.preventDefault();

        setListaUsuarios([...listaUsuarios, {nom: nombre, ape: apellido, ema: email, tel: telefono}])

        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
    }
    

    //console.log(nombre, apellido, telefono, email);


        


    return(<>
    <div>
        <h2>39. Formulario con composicion de componentes funcionales</h2>
        <form onSubmit={(e) => previeneSubmit(e)}>
            <CompNombre nombre={nombre} onNombreChange={setNombre}/><br/><br/>
            <CompApellido apellido={apellido} onApellidoChange={setApellido}/><br/><br/>
            <CompEmail email={email} onEmailChange={setEmail}/><br/><br/>
            <CompTelefono telefono={telefono} onTelefonoChange={setTelefono}/><br/><br/>
            <button type="submit" onClick={() => envioUsuario(nombre, apellido, email, telefono)}>Enviar</button><br/><br/>
        </form>
        <RenderizaUsuarios nom={nombre} ape={apellido} ema={email} tel={telefono}/>

    </div>
    </>)


}

export default ComponenteFormulario;

