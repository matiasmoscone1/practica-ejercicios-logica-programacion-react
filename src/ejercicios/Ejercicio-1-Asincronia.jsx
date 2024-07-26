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
/*            setTimeout(() => {*/
                const response = await fetch(URL);
                if(!response.ok){
                    throw new Error("No se pudo cargar los datos...");
                }
                const data = await response.json();
                setDataGithub(data);
                /*
                fetch(URL)
                .then((response) => response.json())
                .then((data) => setDataGithub(data));*/
                setLoading(false);
            /*}, 3000);*/
        }catch(err){
            setError(err.message);
            setLoading(false);
            console.error(err);
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
            <ul>
                <li>{dataGithub.avatar_url}</li>
                <li>{dataGithub.login}</li>
                <li>{dataGithub.created_at}</li>
                <li>{dataGithub.followers}</li>
                <li>{dataGithub.following}</li>
                <li>{dataGithub.id}</li>
                <li>{dataGithub.html_url}</li>
                <li>{dataGithub.updated_at}</li>
            </ul>
                
            }
        </div>

    </div>)

}

export default Ejercicio1;















