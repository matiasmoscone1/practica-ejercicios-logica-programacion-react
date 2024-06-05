


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
    <div className="crud-container">
        <div className="form-container">
            <form onSubmit={() => {}}>
                <label>Articulo:</label>{" "}
                <input type="text" name="articulo" /><br/>
                <label>Color:</label>{" "}
                <input type="text" name="color" /><br/>
                <label>Precio:</label>{" "}
                <input type="number" name="precio" /><br/>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <table border={1}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Articulo</td>
                    <td>Color</td>
                    <td>Precio</td>
                    <td colSpan={2} style={{textAlign: "center"}}>Acciones</td>
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
                            <td><button>Editar</button></td>
                            <td><button>Eliminar</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    
    </div>);

}



export default EjercicioCRUD;


