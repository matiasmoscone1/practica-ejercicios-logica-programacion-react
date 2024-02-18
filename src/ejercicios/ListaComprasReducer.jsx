
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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Computadora</td>
                </tr>
                <tr>
                    <td>Tablet</td>
                </tr>
                <tr>
                    <td>Celular</td>
                </tr>
                <tr>
                    <td>Teclado</td>
                </tr>
                <tr>
                    <td>Monitor</td>
                </tr>
                <tr>
                    <td>Mouse</td>
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




