import { useState } from "react";


//10. Lista de Elementos Dinámica: Crea un componente que reciba una matriz de elementos 
//y los muestre en una lista. Los usuarios deben poder eliminar elementos haciendo clic 
//en un botón.

//creando componente ListaDinamica
const ListaDinamica = () => {

    //creando array con jugadores
    const jugadores = [{
        nombre: "Matias",
        apellido: "Moscone",
        edad: 27
    },
    {
        nombre: "Lionel",
        apellido: "Messi",
        edad: 36
    },
    {
        nombre: "Angel",
        apellido: "Di Maria",
        edad: 36
    },
    {
        nombre: "Emiliano",
        apellido: "Martinez",
        edad: 31
    }];

    //creando variable que almacenara el estado del array de jugadores
    const [arrayJugadores, setArrayJugadores] = useState(jugadores);

    //funcion que toma por parametro el apellido del jugador y setea nuevamente 
    //el array de jugadores, con el filtrado
    const eliminarJugador = (apellido) => {
        //recorre todo el array y deja en el array todos los jugadores cuyo apellido sea distinto
        //al apellido que se paso por parametro
        setArrayJugadores(arrayJugadores.filter((jug) => jug.apellido !== apellido));
        //console.log(arrayJugadores);
    }


    return(<>
    <div>
        <h2>10. Lista dinamica de elementos</h2>
        {/* Recorre todo el array de jugadores y renderiza en el DOM */}
        <div>{arrayJugadores.map((jugador) => {
            return(<li key={jugador.apellido}>{`Nombre: ${jugador.nombre}  Apellido: ${jugador.apellido} 
            Edad: ${jugador.edad} `}<button onClick={() => eliminarJugador(jugador.apellido)}>Eliminar</button></li>);
        })}</div>


    </div>
    
    </>)


}


export default ListaDinamica;



