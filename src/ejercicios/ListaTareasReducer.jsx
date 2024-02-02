import { useReducer } from "react";


//Lista de tareas: Crea un componente funcional de React. Usa useReducer para gestionar un 
//estado que represente una lista de tareas. Implementa la capacidad de agregar y eliminar 
//tareas.



const ListaTareasReducer = () => {

    const initialState = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"];

    const [state, dispatch] = useReducer(reducer, initialState);


    
    //console.log(state);






    return(<>
    <div>
        <h2>42. Lista de tareas con reducer (useReducer)</h2>



    </div>
    
    </>)


}

export default ListaTareasReducer;













