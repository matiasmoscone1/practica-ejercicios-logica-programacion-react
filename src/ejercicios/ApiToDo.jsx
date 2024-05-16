import { useEffect } from "react";
import { useState } from "react";


const ApiToDo = () => {

    const [info, setInfo] = useState(null);

    const URL = "https://jsonplaceholder.typicode.com/todos";

    const callApi = () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setInfo(data))
    }

    useEffect(() => {
        callApi();
    }, []);

    console.log(info);




    return(<>

        <div>
            <h2>Lista de tareas</h2>
        </div>
    
        <div>
            <table>
                <th>
                    <tr>
                        <td>UserId</td>
                        <td>Id</td>
                        <td>Titulo</td>
                        <td>Estado</td>
                    </tr>
                </th>
                <tbody>
                    {info.map((tarea) => {
                        return(<tr>
                            <td>{tarea.userId}</td>
                            <td>{tarea.id}</td>
                            <td>{tarea.title}</td>
                            <td>{tarea.completed}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    
    </>);

}

export default ApiToDo;




