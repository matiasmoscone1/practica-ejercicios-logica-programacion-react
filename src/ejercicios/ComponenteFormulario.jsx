

//39. Composición de Componentes Funcionales: Crea un formulario de registro que consista 
//en componentes funcionales separados para el nombre de usuario, la dirección de correo 
//electrónico y la contraseña. Estos componentes deben ser componibles y reutilizables.

//importando los hooks
import { useEffect } from "react"
import { useState } from "react"

//creando componentes individuales que retornan estructura html, se le pasa por parametro el nombre (variable de estado)
//y la variable que va actualizando el estado
const CompNombre = ({nombre, onNombreChange}) => {
    return(<><label>Nombre</label>{" "}<input type="text" value={nombre} onChange={(e) => onNombreChange(e.target.value)}/> (entre 4 y 16 caracteres)</>)
}

const CompApellido = ({apellido, onApellidoChange}) => {
    return(<><label>Apellido</label>{" "}<input type="text" value={apellido} onChange={(e) => onApellidoChange(e.target.value)}/> (entre 4 y 16 caracteres)</>)
}

const CompEmail = ({email, onEmailChange}) => {
    return(<><label>Email</label>{" "}<input type="text" value={email} onChange={(e) => onEmailChange(e.target.value)}/> (formato asdasd@asd.asd)</>)
}

const CompTelefono = ({telefono, onTelefonoChange}) => {
    return(<><label>Telefono</label>{" "}<input type="number" value={telefono} onChange={(e) => onTelefonoChange(e.target.value)}/> (10 numeros en total)</>)
}

//Componente que retorna que alguno de los campos del formulario fallo
const NoValida = () => {
    return(<><p>Nombre, apellido, email o telefono incorrecto</p></>)
}

//Componente que renderiza los usuarios en una tabla, se le pasa por parametro el listado 
//de los usuarios y los renderiza
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


//Componente principal
const ComponenteFormulario = () => {

    //se crean todas las variables de esatdo 
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState(undefined);
    const [apellido, setApellido] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [telefono, setTelefono] = useState(undefined);
    const [usuarios, setUsuarios] = useState([]);
    const [valida, setValida] = useState(undefined);

    //funcion que se llama al enviar el formulario 
    const previeneSubmit = (e) => {
        //previene el comportamiento por defecto del submit
        e.preventDefault();
        
        //setea un nuevo id por cada vez que se envia el formulario
        setId(id + 1);

        //expresiones regulares para validar datos del formulario
        const validaNombreApellido = /^[a-zA-Z]{4,16}$/;
        const validaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validaTelefono = /^[0-9]{10}$/;

        //Valida todo el formulario y si pasan correctamente todos los datos, setea la variable
        //valida en true
        if(validaNombreApellido.test(nombre) && validaNombreApellido.test(apellido) && 
        validaEmail.test(email) && validaTelefono.test(telefono)){
            setValida(true);
        }else{
            //sino setea la variable en false y llama al componente
            setValida(false);
        }
    }
    
    //hook que setea las variables de estado dependiendo la variable de estado "valida"
    useEffect(() => {            
        if(valida){        
            setUsuarios([...usuarios, {id: id, nom: nombre, ape: apellido, ema: email, tel: telefono}])
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
        }else{
            console.log("debugg");
        }
    //cada vez que valida cambie, se actualizara el useEffect
    }, [valida]);

    //console.log(nombre, apellido, telefono, email);


        


    return(<>
    <div>
        <h2>39. Formulario con composicion de componentes funcionales</h2>
        <form onSubmit={(e) => previeneSubmit(e)}>
            {/* Llama a todos los componentes del formulario y se le pasa como prop la variable de estado
            y su prop actualizadora  */}
            <CompNombre nombre={nombre} onNombreChange={setNombre}/><br/><br/>
            <CompApellido apellido={apellido} onApellidoChange={setApellido}/><br/><br/>
            <CompEmail email={email} onEmailChange={setEmail}/><br/><br/>
            <CompTelefono telefono={telefono} onTelefonoChange={setTelefono}/><br/><br/>
            <button type="submit">Enviar</button><br/><br/>
        </form>
        {/* Llama al componente para renderizar usuarios y se le pasa como prop el listado de los usuarios */}
        <RenderizaUsuarios usuarios={usuarios}/>
        {/* Si valida es false, se llama al componente NoValida para mostrar por pantalla que alguno de los
        datos del formulario fallo */}
        {valida === false && <NoValida/>}
        

    </div>
    </>)


}

export default ComponenteFormulario;

