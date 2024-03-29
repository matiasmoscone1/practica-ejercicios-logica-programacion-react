
//44. Lista de compras con cantidades: Crea un componente funcional de React para una lista 
//de compras. Usa useReducer para gestionar el estado que represente elementos de la lista 
//de compras con cantidades. Implementa la capacidad de agregar y quitar elementos, 
//así como la posibilidad de actualizar las cantidades.

import { useReducer } from "react";


const ListaComprasReducer = () => {

    const listaArticulos = [
        {
        articulo: "Computadora",
        marca: "Logitech",
        precio: 2000,
        color: "Negro"
        },
        {
        articulo: "Tablet",
        marca: "Samsung",
        precio: 270,
        color: "Blanco"
        },
        {
        articulo: "Celular",
        marca: "TCL",
        precio: 450,
        color: "Gris"
        },
        {
        articulo: "Teclado",
        marca: "CX",
        precio: 90,
        color: "Negro"
        },
        {
        articulo: "Monitor",
        marca: "Samsung",
        precio: 390,
        color: "Negro"
        },
        {
        articulo: "Mouse",
        marca: "Talon",
        precio: 60,
        color: "Rojo"
        }
    ];

    const listaCompra = [];

    const initialState = {lista: listaCompra};


    const reducer = (state, action) => {

        switch(action.type){
            case "AGREGAR":
                const indexExistente = state.lista.findIndex((art) => art.articulo === action.valor.articulo);

                if(indexExistente !== -1){
                    const nuevaLista = [...state.lista];
                    nuevaLista[indexExistente].cantidad += 1;
                    return {lista: nuevaLista}
                }else{
                    action.valor.cantidad = 1;
                    return {lista: [...state.lista, action.valor]}
                }
            case "ELIMINAR":
                const index = state.lista.findIndex((art) => art.articulo === action.valor.articulo);
                const nuevaLista = [...state.lista];
                if(index !== -1){                    
                    nuevaLista[index].cantidad -= 1;
                    if(nuevaLista[index].cantidad < 1){
                        return {lista: state.lista.filter((art) => art.articulo !== action.valor.articulo)};
                    }
                    return {lista: nuevaLista}
                }else{
                    return state;
                }
                
            default:
                return state;
        }
    };


    const [state, dispatch] = useReducer(reducer, initialState);


    const agregar = (art) => {dispatch({type: "AGREGAR", valor: art})}

    const eliminar = (art) => {dispatch({type: "ELIMINAR", valor: art})}
    
  






    const TablaArticulos = () => {
        return(<table border={1}>
            <thead>
                <tr>
                    <td>Articulo</td>
                    <td>Marca</td>
                    <td>Precio</td>
                    <td>Color</td>
                </tr>
            </thead>
            <tbody>
                {listaArticulos.map((art) => {
                    return(<tr key={art.articulo}>
                        <td>{art.articulo}</td>
                        <td>{art.marca}</td>
                        <td>{art.precio}</td>
                        <td>{art.color}</td>
                        <td><button onClick={() => {agregar(art); console.log(art)}}>Añadir</button></td>
                        <td><button onClick={() => {eliminar(art);}}>Quitar</button></td>
                    </tr>)
                })}
                
            </tbody>
        </table>)

    }

    console.log(state);
    
    return(<>
        <h2>44. Lista de compras con reducer (useReducer)</h2>

        <p>{state.lista}</p>

        <TablaArticulos/>

    </>)

}

export default ListaComprasReducer;




