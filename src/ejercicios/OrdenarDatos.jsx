

//13. Ordenamiento de datos: Construye un componente que tome una lista de objetos y 
//permita al usuario ordenarla por diferentes propiedades (por ejemplo, nombre, edad, fecha). 
//Utiliza funciones de orden superior para realizar el ordenamiento.

import { useState } from "react";

const OrdenarDatos = () => {

    const datos = [{
        nombre: "Matias",
        edad: 27,
        fecha: "16/05/1996"
    },
    {
        nombre: "Messi",
        edad: 36,
        fecha: "24/06/1987"
    },
    {
        nombre: "Dibu",
        edad: 31,
        fecha: "02/09/1992"
    },
    {
        nombre: "Cuti",
        edad: 25,
        fecha: "27/04/1998"
    }];

    const [nuevosJugadores, setNuevosJugadores] = useState(datos);

    const funcOrdenSuperior = (funcion) => {
        

    };

    const ordenarNombre = () => {
        const jugadoresOrdenadosNombre = [...nuevosJugadores];
        jugadoresOrdenadosNombre.sort((a, b) => a.nombre.localeCompare(b.nombre));
        setNuevosJugadores(jugadoresOrdenadosNombre);
    };

    const ordenarEdad = () => {
        setNuevosJugadores(nuevosJugadores.sort(a,b) = a.edad - b.edad);
    }

    return(<>
    <div>
        <h2>13. Ordenamiento de datos </h2>
        <button onClick={() => ordenarNombre()}>Nombre</button>{" "}
        <button onClick={() => ordenarEdad()}>Edad</button>{" "}
        <button>Fecha</button><br/><br/>
        <div>
            {nuevosJugadores.map((jugador) => {
                return(<li key={jugador.nombre}>{` Nombre: ${jugador.nombre} Edad: ${jugador.edad} Fecha: ${jugador.fecha}`}</li>)
            })}
        </div>


    </div>
    </>)

}


export default OrdenarDatos;
