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

    const { dataGithub, setDataGithub, username, setUsername, 
        loading, setLoading, error, setError } = useContext(ContextGithub);

    const URL = `https://api.github.com/users/${username}`;


    const fetchAPI = async () => {
        /* bloque trycatch */
        try{
            setLoading(true);
                const response = await fetch(URL);
                if(!response.ok){
                    throw new Error("No se pudo cargar los datos...");
                }
                const data = await response.json();
                setDataGithub(data);
                setLoading(false);
        }catch(err){
            setError(err.message);
            setLoading(false);
            console.log(error);
        }

    }
    console.log(dataGithub); 

    useEffect(() => {
       
    }, []);

    const handleInput = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchAPI();
        setUsername("");
        if(!loading){
            setError("");
        }
    }


    

    return(
    <div>
        <label>Ingrese el usuario para buscar</label>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input value={username} onChange={(e) => {handleInput(e)}}/>
            <button type="submit">Buscar</button>
        </form>

        <div>
            {loading && <div>Cargando...</div>}
            {error && <div>{error}</div>}
            {dataGithub && 
            <ul className="datos-container">
                <li><img src={dataGithub.avatar_url}></img></li>
                <li>Usuario: {dataGithub.login}</li>
                <li>Id:{dataGithub.id}</li>
                <li>Email: </li>
                <li>Seguidores: {dataGithub.followers}</li>
                <li>Siguiendo: {dataGithub.following}</li>                
                <li><a href={dataGithub.html_url}></a></li>
                <li>Usuario creado: {dataGithub.created_at}</li>
                <li>Ultimos cambios: {dataGithub.updated_at}</li>
            </ul>
                
            }
        </div>

    </div>)

}

export default Ejercicio1;















