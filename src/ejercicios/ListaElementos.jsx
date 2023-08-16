

//2. Lista de elementos: Crea un componente que muestre una lista de nombres. 
//Utiliza un arreglo de nombres y recórrelo para mostrar cada nombre en la lista.

//import { useState } from "react";

//Creando arreglo de nombres
const arregloNombres = ["Matias", "Marco", "Agustin", "Joaquin", "Lautaro"];

//Creando componente 
const ListaElementos = () => {

    //const [nombres, setNombres] = useState(arregloNombres);

    return(
        <>
        <div>
            <h2>Ejercicio 2: Lista de elementos</h2>
            {//Recorre el arreglo de nombres creado y muestra en el Dom cada nombre con su
            //respectiva key
                arregloNombres.map((nombre) => {
                    return(
                    <ul key={nombre}>
                        <li>{nombre}</li>
                    </ul>
                    )
                })
            }

        </div>
        </>
    )




};


export default ListaElementos;





