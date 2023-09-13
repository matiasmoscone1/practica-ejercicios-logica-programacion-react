

//10. Lista de Elementos Dinámica: Crea un componente que reciba una matriz de elementos 
//y los muestre en una lista. Los usuarios deben poder eliminar elementos haciendo clic 
//en un botón.

const ListaDinamica = () => {

    const arrayJugadores = [{
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


    const eliminarJugador = (apellido) => {
        
    }


    return(<>
    <div>
        <h2>10. Lista dinamica de elementos</h2>

        <div>{arrayJugadores.map((jugador) => {
            return(<li key={jugador.apellido}>{`Nombre: ${jugador.nombre}  Apellido: ${jugador.apellido} 
            Edad: ${jugador.edad} `}<button onClick={eliminarJugador(jugador.apellido)}>Eliminar</button></li>);
        })}</div>


    </div>
    
    </>)


}


export default ListaDinamica;



