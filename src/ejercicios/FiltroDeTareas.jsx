import { useState } from "react";
//11. Filtro de Lista de Tareas: Crea una lista de tareas con un filtro que permita 
//a los usuarios mostrar solo tareas completadas, incompletas o todas.

//creando componente
const FiltroDeTareas = () => {

    //creando array de tareas
    const tareas = [{
        id: 1,
        actividad: "Tarea 1 - Completa",
        check: true
    },
    {
        id: 2,
        actividad: "Tarea 2 - Completa",
        check: true
    },
    {
        id: 3,
        actividad: "Tarea 3 - Incompleta",
        check: false
    },
    {
        id: 4,
        actividad: "Tarea 4 - Completa",
        check: true
    },
    {
        id: 5,
        actividad: "Tarea 5 - Incompleta",
        check: false
    },
    {
        id: 6,
        actividad: "Tarea 6 - Incompleta",
        check: false
    },
    {
        id: 7,
        actividad: "Tarea 7 - Completa",
        check: true
    },
    {
        id: 8,
        actividad: "Tarea 8 - Completa",
        check: true
    },
    {
        id: 9,
        actividad: "Tarea 9 - Incompleta",
        check: false
    }];

    //creando el estado de nuevasTareas para que sea renderizado en el DOM
    const [nuevasTareas, setNuevasTareas] = useState(tareas);
  
    //funcion que filtra la lista de tareas que estan completas
    const filtrarCompletas = () => {
        setNuevasTareas(tareas.filter((tarea) => tarea.check === true));
    }

    //funcion que filtra la lista de tareas que estan incompletas
    const filtrarIncompletas = () => {
        setNuevasTareas(tareas.filter((tarea) => tarea.check === false));
    }

    //funcion que filtra todas las tareas
    const filtrarTodas = () => {
        setNuevasTareas(tareas.map((tarea) => tarea));
    }



    return(<>
    <div>
        <h2>11. Filtro lista de tareas</h2>
        {/* Por cada boton llama a la funcion que se requiera*/}
        <button onClick={() => filtrarTodas()}>Todas</button>{" "}
        <button onClick={() => filtrarCompletas()}>Completadas</button>{" "}
        <button onClick={() => filtrarIncompletas()}>Incompletas</button><br/><br/>
        {/* Rendeeriza las tareas en el DOM */}
        <div>{nuevasTareas.map((tar) => {
            return(<li key={tar.id}>{`${tar.id} - ${tar.actividad}`}</li>);
        })}</div>

    </div>
    </>);

}
//exporta el componente FiltroDeTareas
export default FiltroDeTareas;

