

//2. Lista de elementos: Crea un componente que muestre una lista de nombres. 
//Utiliza un arreglo de nombres y recórrelo para mostrar cada nombre en la lista.

import { useState } from "react";

const arregloNombres = ["Matias", "Marco", "Agustin", "Joaquin", "Lautaro"];

const ListaElementos = () => {

    //const [nombres, setNombres] = useState(arregloNombres);

    return(
        <>
        <div>
            <h2>Ejercicio 2: Lista de elementos</h2>
            {
                arregloNombres.map((nombre) => {
                    return(
                    <ul>
                        <li key={nombre}>{nombre}</li>
                    </ul>
                    )
                })
            }

        </div>
        </>
    )




};


export default ListaElementos;





