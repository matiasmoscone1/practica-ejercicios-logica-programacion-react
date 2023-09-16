import { useState } from "react";
//11. Filtro de Lista de Tareas: Crea una lista de tareas con un filtro que permita 
//a los usuarios mostrar solo tareas completadas, incompletas o todas.

const FiltroDeTareas = () => {

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

    const [nuevasTareas, setNuevasTareas] = useState(tareas);
    const [viejasTareas, setViejasTareas] = useState(tareas);
    const [flag, setFlag] = useState(false);

    const filtrarCompletas = () => {
        setFlag(true);
        setNuevasTareas(nuevasTareas.filter((tarea) => tarea.check === true));
    }

    const filtrarIncompletas = () => {
        setFlag(true);
        setNuevasTareas(nuevasTareas.filter((tarea) => tarea.check === false));
    }

    const filtrarTodas = () => {
        setNuevasTareas(viejasTareas.map((tarea) => tarea));
    }


    return(<>
    <div>
        <h2>11. Filtro lista de tareas</h2>
        <button onClick={() => filtrarTodas()}>Todas</button>{" "}
        <button onClick={() => filtrarCompletas()}>Completadas</button>{" "}
        <button onClick={() => filtrarIncompletas()}>Incompletas</button><br/><br/>
        <div>{nuevasTareas.map((tar) => {
            return(<li key={tar.id}>{`${tar.id} - ${tar.actividad}`}</li>);
        })}</div>

    </div>
    </>);

}

export default FiltroDeTareas;

