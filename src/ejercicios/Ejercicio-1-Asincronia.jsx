/*
Ejercicio 1: Fetch de Datos y Renderizado Condicional

Crea una aplicación en React que haga una petición a una API pública (por ejemplo, la 
API de GitHub) para obtener datos de un usuario específico.
Mientras los datos se están cargando, muestra un spinner o un mensaje de "Cargando...".
Si la petición es exitosa, muestra los datos del usuario (nombre, avatar, número de 
repositorios, etc.).

https://api.github.com/users/${username}

*/

import { useEffect } from "react";
import { useContext } from "react";
import { ContextGithub } from "./Context";

const Ejercicio1 = () => {

    /*const URL = `https://api.github.com/users/${username}`*/

    const URL = `https://api.github.com/users/matiasmoscone1`;

    const { dataGithub, setDataGithub, username, setUsername } = useContext(ContextGithub);


    const fetchAPI = () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setDataGithub(data));

    }

    useEffect(() => {
        fetchAPI();
    }, []);

    console.log(dataGithub);

    const handleInput = (e) => {
        setUsername(e.target.value);
        console.log(username);
    }

    return(<div>
        <label>Ingrese el username para buscar</label>
        <input onChange={(e) => {handleInput(e)}}/>

    </div>)

}

export default Ejercicio1;















