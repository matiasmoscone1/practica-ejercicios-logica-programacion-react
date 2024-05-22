import { useEffect } from "react";
import { useState } from "react";


const ApiToDo = () => {

    const [info, setInfo] = useState([]);
    const [estadoInput, setEstadoInput] = useState(null);

    const URL = "https://jsonplaceholder.typicode.com/todos";

    
    const callApi = () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setInfo(data))
    }

    /* ASYNC - AWAIT */
    /*
    const callApi = async () => {
        const response = await fetch(URL);
        const data = response.json();
        setInfo(data);
    }*/


    useEffect(() => {
        callApi();
    }, []);

    console.log(info);

    const filtradoCompletado = () => {
        const arrayFiltrado = info.filter((tarea) => tarea.completed);
        setInfo(arrayFiltrado);

    }

    const filtradoUserId = (id) => {
        const arrayFiltrado = info.filter((tarea) => tarea.userId === Number(id));
        setInfo(arrayFiltrado);     
    }

    const filtradoId = (id) => {
        const arrayFiltrado = info.filter((tarea) => tarea.id === Number(id));
        setInfo(arrayFiltrado);
    }


    useEffect(() => {
        callApi();
    }, []);



    return(<>

        <div>
            <h2>Lista de tareas</h2>
        </div>

        <div>
            <h5>Filtrado por: </h5>

            <input onChange={(e) => setEstadoInput(e.target.value)}/>
            <br/><br/>

            <button onClick={() => filtradoUserId(estadoInput)}>UserId</button>{" "}
            <button onClick={() => filtradoId(estadoInput)}>Id</button>{" "}
            <button onClick={() => filtradoCompletado()}>Completado</button>
            <br/><br/>
            <button onClick={() => callApi()}>Todas las tareas</button>
            <br/><br/>

        </div>

        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>UserId</td>
                        <td>Id</td>
                        <td>Titulo</td>
                        <td>Estado</td>
                    </tr>
                </thead>
                <tbody>
                    {info.map((tarea) => {
                        return(<tr key={tarea.id}>
                            <td>{tarea.userId}</td>
                            <td>{tarea.id}</td>
                            <td>{tarea.title}</td>
                            <td>{tarea.completed ? "true" : "false"}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    
    </>);

}

export default ApiToDo;




