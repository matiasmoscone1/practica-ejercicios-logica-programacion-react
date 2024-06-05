


const EjercicioCRUD = () => {

    const productos = [{
        id: 1,
        articulo: "Celular",
        color: "Negro",
        precio: 230
    },
    {
        id: 2,
        articulo: "Computadora",
        color: "Blanca",
        precio: 1030
    },
    {
        id: 3,
        articulo: "Tablet",
        color: "Gris",
        precio: 330
    },
    {
        id: 4,
        articulo: "Celular",
        color: "Blanco",
        precio: 370
    },
    {
        id: 5,
        articulo: "Monitor",
        color: "Negro",
        precio: 120
    }
    ];





    return(
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Articulo</td>
                    <td>Color</td>
                    <td>Precio</td>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => {
                    return(
                        <tr key={producto.id}>
                            <td>{producto.id}</td>                            
                            <td>{producto.articulo}</td>
                            <td>{producto.color}</td>
                            <td>{producto.precio}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    
    </div>);

}



export default EjercicioCRUD;


