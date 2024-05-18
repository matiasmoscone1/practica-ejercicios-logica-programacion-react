import { useEffect } from "react";
import { useState } from "react";


const ApiToDo = () => {

    const [info, setInfo] = useState([]);

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




    return(<>

        <div>
            <h2>Lista de tareas</h2>
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




