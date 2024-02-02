import { useReducer } from "react";


//Lista de tareas: Crea un componente funcional de React. Usa useReducer para gestionar un 
//estado que represente una lista de tareas. Implementa la capacidad de agregar y eliminar 
//tareas.



const ListaTareasReducer = () => {

    const initialState = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"];

    const [state, dispatch] = useReducer(reducer, initialState);

    const reducer = (state, action) => {

        switch(action.type){
            case "AGREGAR":
                return state = state.push(action.value);
            case "ELIMINAR":
                return null; 
            default:
                return null;
        }
    }

    //console.log(state);

    const agregar = (tarea) => {
        dispatch({type: "AGREGAR", "Tarea 5"})
    }




    return(<>
    <div>
        <h2>42. Lista de tareas con reducer (useReducer)</h2>
        <input />


    </div>
    
    </>)


}

export default ListaTareasReducer;













