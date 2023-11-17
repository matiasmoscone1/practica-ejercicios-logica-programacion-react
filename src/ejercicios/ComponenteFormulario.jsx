

//39. Composición de Componentes Funcionales: Crea un formulario de registro que consista 
//en componentes funcionales separados para el nombre de usuario, la dirección de correo 
//electrónico y la contraseña. Estos componentes deben ser componibles y reutilizables.

const CompNombre = () => {

}
const CompApellido = () => {
    
}
const CompEmail = () => {
    
}
const CompTelefono = () => {
    
}



const ComponenteFormulario = () => {

    const previeneSubmit = (e) => {
        e.preventDefault();
    }



    return(<>
    <div>
        <h2>39. Formulario con composicion de componentes funcionales</h2>
        <form onSubmit={(e) => {previeneSubmit(e)}}>
        <CompNombre />
        <CompApellido />
        <CompEmail />
        <CompTelefono />
        </form>
    </div>
    </>)


}

export default ComponenteFormulario;

