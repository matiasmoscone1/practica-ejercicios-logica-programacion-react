import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";


//Lista de tareas: Crea un componente funcional de React. Usa useReducer para gestionar un 
//estado que represente una lista de tareas. Implementa la capacidad de agregar y eliminar 
//tareas.



const ListaTareasReducer = () => {

    const initialState = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"];
    
    const reducer = (state, action) => {

        switch(action.type){
            case "AGREGAR":
                return state = [...state, action.value];
            case "ELIMINAR":
                return state.filter((tarea) => tarea !== action.value);
            default:
                return null;
        }
    }

    const [task, setTask] = useState("");

    const [state, dispatch] = useReducer(reducer, initialState);

   
    useEffect(() => {
        console.log(state);
    }, [state]);


    const agregar = (tarea) => {
        dispatch({type: "AGREGAR", value: tarea});
        setTask("");
    }

    const eliminar = (tarea) => {
        dispatch({type: "ELIMINAR", value: tarea});
        setTask("");
    } 
    
    const ListadoTarea = ({ tarea }) => {
        return(<table border={1}>
            <thead>
                <tr>
                    <td>
                        Tarea
                    </td>
                </tr>
            </thead>
            <tbody>
                {tarea.map((tar, index) => {
                    return(
                    <tr key={index}>
                        <td>{tar}</td>
                    </tr>) 
                })}
            </tbody>
        </table>)

    }


    return(<>
    <div>
        <h2>42. Lista de tareas con reducer (useReducer)</h2>
        <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}}/>{" "}

        <button onClick={() => {agregar(task)}}>Agregar</button>{" "}
        <button onClick={() => {eliminar(task)}}>Eliminar</button>
        <p>Lista de tareas: {`[${state.join(", ")}]`}</p>

        <ListadoTarea tarea={state}/>
    </div>
    
    </>)


}

export default ListaTareasReducer;













