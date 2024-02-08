import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";


//Lista de tareas: Crea un componente funcional de React. Usa useReducer para gestionar un 
//estado que represente una lista de tareas. Implementa la capacidad de agregar y eliminar 
//tareas.

//creando componente principal
const ListaTareasReducer = () => {

    //creando array de tareas 
    const initialState = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"];
    
    //creando funcion reductora, donde se le pasa el estado global y la accion 
    const reducer = (state, action) => {
        //dependiendo el tipo de accion realiza algo u otra cosa
        switch(action.type){
            case "AGREGAR":
                //retorna el estado global + el valor de la accion (en este caso, la tarea)
                return state = [...state, action.value];
            case "ELIMINAR":
                //filtra en un nuevo array todas las tareas que son distintas al valor de la
                //accion, para "eliminar" la tarea que se indico
                return state.filter((tarea) => tarea !== action.value);
            default:
                //devuelve null
                return null;
        }
    }

    //inicializando hook useState
    const [task, setTask] = useState("");

    //inicializando hook useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

   //creando useEffect
    useEffect(() => {
        //tirando un console log del estado global para ver cuanodo cambia
        console.log(state);
    }, [state]);


    //creando funcion agregar que se le pasa una tarea por parametro
    const agregar = (tarea) => {
        //ejecuta el dispatch con el tipo de la accion y el valor de la accion
        dispatch({type: "AGREGAR", value: tarea});
        //limpia el input 
        setTask("");
    }

    //creando funcion eliminar que se le pasa una tarea por parametro
    const eliminar = (tarea) => {
        //ejecuta el dispatch con el tipo de la accion y el valor de la accion
        dispatch({type: "ELIMINAR", value: tarea});
        //limpia el input 
        setTask("");
    } 
    
    //creando componente que renderiza la tabla en el DOM
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
        {/* input que setea el valor de la tarea */}
        <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}}/>{" "}

        {/* botones con sus acciones respectivamente */}
        <button onClick={() => {agregar(task)}}>Agregar</button>{" "}
        <button onClick={() => {eliminar(task)}}>Eliminar</button>
        <p>Lista de tareas: {`[${state.join(", ")}]`}</p>

        {/* llamando al componente que renderiza la tabla en el DOM */}
        <ListadoTarea tarea={state}/>
    </div>
    
    </>)


}

export default ListaTareasReducer;













