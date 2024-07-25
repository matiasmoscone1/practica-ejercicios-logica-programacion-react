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

    const { dataGithub, setDataGithub, username, setUsername } = useContext(ContextGithub);

    const URL = `https://api.github.com/users/${username}`;


    const fetchAPI = () => {
        /* bloque trycatch */
        try{
            fetch(URL)
            .then((response) => response.json())
            .then((data) => setDataGithub(data));
            console.log(dataGithub);  
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(() => {
        fetchAPI();
    }, []);


    const handleInput = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username){
            fetchAPI();}
        setUsername("");
    }

    return(<div>
        <label>Ingrese el usuario para buscar</label>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input value={username} onChange={(e) => {handleInput(e)}}/>
            <button type="submit">Buscar</button>
        </form>
    </div>)

}

export default Ejercicio1;















