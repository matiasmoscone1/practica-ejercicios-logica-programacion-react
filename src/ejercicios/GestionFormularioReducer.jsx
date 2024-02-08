

//43. Gestión de formulario: Crea un formulario de React con varios campos (por ejemplo, 
//nombre, email, contraseña). Usa useReducer para gestionar el estado del formulario.
//Implementa la capacidad de manejar cambios en los campos y mostrar el estado del formulario.


const GestionFormularioReducer = () => {









    return(<>
        <h2>43. Gestionador de formularios (useReducer)</h2>
        
        <form action="submit">
            <label>Nombre </label>
            <input type="text"/><br/><br/>
            <label>Apellido </label>
            <input type="text"/><br/><br/>
            <label>Email </label>
            <input type="text"/><br/><br/>
            <label>Numero </label>
            <input type="number"/>

        </form>



    </>)

}

export default GestionFormularioReducer;


