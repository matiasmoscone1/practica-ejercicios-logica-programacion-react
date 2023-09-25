

//13. Ordenamiento de datos: Construye un componente que tome una lista de objetos y 
//permita al usuario ordenarla por diferentes propiedades (por ejemplo, nombre, edad, fecha). 
//Utiliza funciones de orden superior para realizar el ordenamiento.

import { useState } from "react";

const OrdenarDatos = () => {

    const datos = [{
        nombre: "Matias",
        edad: 27,
        fecha: new Date("1996-05-16")
    },
    {
        nombre: "Messi",
        edad: 36,
        fecha: new Date("1987-06-24")
    },
    {
        nombre: "Dibu",
        edad: 31,
        fecha: new Date("1992-09-02")
    },
    {
        nombre: "Cuti",
        edad: 25,
        fecha: new Date("1998-04-27")
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
        const jugadoresOrdenadosEdad = [...nuevosJugadores];
        jugadoresOrdenadosEdad.sort((a,b) => a.edad - b.edad);
        setNuevosJugadores(jugadoresOrdenadosEdad);
    }

    const ordenarFecha = () => {
        const jugadoresOrdenadosFecha = [...nuevosJugadores];
    
        jugadoresOrdenadosFecha.sort((a, b) => {
            console.log(a.fecha.getTime());
            return a.fecha.getTime() - b.fecha.getTime();  
        });

        setNuevosJugadores(jugadoresOrdenadosFecha);
    }

    return(<>
    <div>
        <h2>13. Ordenamiento de datos </h2>
        <button onClick={() => ordenarNombre()}>Nombre</button>{" "}
        <button onClick={() => ordenarEdad()}>Edad</button>{" "}
        <button onClick={() => ordenarFecha()}>Fecha</button><br/><br/>
        <div> 
            {nuevosJugadores.map((jugador) => {
                return(<li key={jugador.nombre}>{` Nombre: ${jugador.nombre} Edad: ${jugador.edad} Fecha: ${jugador.fecha}`}</li>)
            })}
        </div>


    </div>
    </>)

}


export default OrdenarDatos;
