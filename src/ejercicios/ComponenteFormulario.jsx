

//39. Composición de Componentes Funcionales: Crea un formulario de registro que consista 
//en componentes funcionales separados para el nombre de usuario, la dirección de correo 
//electrónico y la contraseña. Estos componentes deben ser componibles y reutilizables.


const ComponenteFormulario = () => {




    const previeneSubmit = (e) => {
        e.preventDefault();
    }

    return(<>
    <div>
        <h2>39. Formulario con composicion de componentes funcionales</h2>
        <form onSubmit={(e) => {previeneSubmit(e)}}>


        </form>
    </div>
    </>)


}

export default ComponenteFormulario;

