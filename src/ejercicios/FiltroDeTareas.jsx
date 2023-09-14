import { useState } from "react";
//11. Filtro de Lista de Tareas: Crea una lista de tareas con un filtro que permita 
//a los usuarios mostrar solo tareas completadas, incompletas o todas.

const FiltroDeTareas = () => {

    const tareas = [{
        id: 1,
        actividad: "Tarea 1",
        check: true
    },
    {
        id: 2,
        actividad: "Tarea 2",
        check: true
    },
    {
        id: 3,
        actividad: "Tarea 3",
        check: false
    },
    {
        id: 4,
        actividad: "Tarea 4",
        check: true
    },
    {
        id: 5,
        actividad: "Tarea 5",
        check: false
    },
    {
        id: 6,
        actividad: "Tarea 6",
        check: false
    },
    {
        id: 7,
        actividad: "Tarea 7",
        check: true
    },
    {
        id: 8,
        actividad: "Tarea 8",
        check: true
    },
    {
        id: 9,
        actividad: "Tarea 9",
        check: false
    }];

    const [nuevasTareas, setNuevasTareas] = useState(tareas);

    const filtrarCompletas = () => {
        setNuevasTareas(nuevasTareas.filter((tarea) => {
            if(tarea.check === true){            
                return(<li>{`${tarea.id} - ${tarea.actividad}`}</li>)
            }
        }));
    }




    return(<>
    <div>
        <h2>11. Filtro lista de tareas</h2>
        <button>Todas</button>{" "}
        <button onClick={() => filtrarCompletas}>Completadas</button>{" "}
        <button>Incompletas</button><br/><br/>
        <div>{nuevasTareas.map((tar) => {
            return(<li key={tar.id}>{`${tar.id} - ${tar.actividad}`}</li>);
        })}</div>

    </div>
    </>);

}

export default FiltroDeTareas;

