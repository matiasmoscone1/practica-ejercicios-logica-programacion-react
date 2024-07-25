/*
Ejercicio 1: Fetch de Datos y Renderizado Condicional

Crea una aplicación en React que haga una petición a una API pública (por ejemplo, la 
API de GitHub) para obtener datos de un usuario específico.
Mientras los datos se están cargando, muestra un spinner o un mensaje de "Cargando...".
Si la petición es exitosa, muestra los datos del usuario (nombre, avatar, número de 
repositorios, etc.).

https://api.github.com/users/${username}

*/

import { useContext } from "react";
import { ContextGithub } from "./Context";

const Ejercicio1 = () => {

    const { dataGithub, setDataGithub } = useContext(ContextGithub);


    

}

export default Ejercicio1;















