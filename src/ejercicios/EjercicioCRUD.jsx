import { useState } from "react";


const EjercicioCRUD = () => {

    const [productos, setProductos] = useState([{
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
    ]);


    const [item, setItem] = useState({
        articulo: "",
        color: "",
        precio: null   
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoId = {...item, id: productos.length + 1}
        agregaProducto(nuevoId);
        setItem({
            articulo: "",
            color: "",
            precio: ""
        })
    }

    const agregaProducto = (obj) => {
        setProductos((prevProductos) => [...prevProductos, obj]);
    };



    const handleProduct = (e) => {
        const { name, value } = e.target;
        setItem((prevProd) => ({...prevProd, [name]: value}));
    }

    console.log(item);
    console.log(productos);

    const updateProduct = (id) => {
        const prodChange = productos.find((prod) => prod.id === id);
        console.log(prodChange);
        
    }

    return(
    <div className="crud-container">
        <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Articulo:</label>{" "}
                <input type="text" name="articulo" value={item.articulo} onChange={(e) => handleProduct(e)}/><br/>
                <label>Color:</label>{" "}
                <input type="text" name="color" value={item.color} onChange={(e) => handleProduct(e)}/><br/>
                <label>Precio:</label>{" "}
                <input type="number" name="precio" value={item.precio} onChange={(e) => handleProduct(e)}/><br/>
                <button  type="submit">Enviar</button>
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
                            <td><button onClick={() => updateProduct(producto.id)}>Editar</button></td>
                            <td><button>Eliminar</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    
    </div>);

}



export default EjercicioCRUD;


