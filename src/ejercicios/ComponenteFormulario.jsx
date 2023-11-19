

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

const RenderizaUsuarios = ({usuarios}) => {
    //console.log(nom,ape,ema,tel);
    return(<><table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Email</td>
                    <td>Telefono</td>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usu) => {
                    return(
                        <tr key={usu.nom}>
                            <td>{usu.id}</td>
                            <td>{usu.nom}</td>
                            <td>{usu.ape}</td>
                            <td>{usu.ema}</td>
                            <td>{usu.tel}</td>
                        </tr>)
                })
                }
            </tbody>
        </table></>);
}


const ComponenteFormulario = () => {

    const [id, setId] = useState(undefined);
    const [nombre, setNombre] = useState(undefined);
    const [apellido, setApellido] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [telefono, setTelefono] = useState(undefined);
    const [usuarios, setUsuarios] = useState([]);

    const previeneSubmit = (e) => {
        e.preventDefault();
        

        setUsuarios([...usuarios, {id: setId(id+1), nom: nombre, ape: apellido, ema: email, tel: telefono}])

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
            <button type="submit">Enviar</button><br/><br/>
        </form>
        <RenderizaUsuarios usuarios={usuarios}/>

    </div>
    </>)


}

export default ComponenteFormulario;

