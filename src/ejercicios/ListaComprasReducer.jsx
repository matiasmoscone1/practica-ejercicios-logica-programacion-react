
//44. Lista de compras con cantidades: Crea un componente funcional de React para una lista 
//de compras. Usa useReducer para gestionar el estado que represente elementos de la lista 
//de compras con cantidades. Implementa la capacidad de agregar y quitar elementos, 
//así como la posibilidad de actualizar las cantidades.


const ListaComprasReducer = () => {






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
                <tr>
                    <td>Computadora</td>
                    <td>Logitech</td>
                    <td>2000</td>
                    <td>Negro</td>
                    <td><button>Agregar</button></td>
                    <td><button>Quitar</button></td>
                </tr>
                <tr>
                    <td>Tablet</td>
                    <td>Samsung</td>
                    <td>270</td>
                    <td>Blanco</td>
                    <td><button>Agregar</button></td>
                    <td><button>Quitar</button></td>
                </tr>
                <tr>
                    <td>Celular</td>
                    <td>TCL</td>
                    <td>450</td>
                    <td>Gris</td>
                    <td><button>Agregar</button></td>
                    <td><button>Quitar</button></td>
                </tr>
                <tr>
                    <td>Teclado</td>
                    <td>CX</td>
                    <td>90</td>
                    <td>Negro</td>
                    <td><button>Agregar</button></td>
                    <td><button>Quitar</button></td>
                </tr>
                <tr>
                    <td>Monitor</td>
                    <td>Samsung</td>
                    <td>390</td>
                    <td>Negro</td>
                    <td><button>Agregar</button></td>
                    <td><button>Quitar</button></td>
                </tr>
                <tr>
                    <td>Mouse</td>
                    <td>Talon</td>
                    <td>60</td>
                    <td>Rojo</td>
                    <td><button>Agregar</button></td>
                    <td><button>Quitar</button></td>
                </tr>
                
            </tbody>
        </table>)

    }


    return(<>
        <h2>44. Lista de compras con reducer (useReducer)</h2>
        <TablaArticulos/>

    </>)

}

export default ListaComprasReducer;




