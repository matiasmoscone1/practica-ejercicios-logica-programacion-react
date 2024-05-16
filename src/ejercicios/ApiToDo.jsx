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


        </div>
    
    </>);

}

export default ApiToDo;




