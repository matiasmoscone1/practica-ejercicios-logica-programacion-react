
//18. Crea un componente de React que tome una lista de elementos y permita al usuario 
//eliminar elementos haciendo clic en un botón.

import { useState } from "react";

const EliminarElementos = () => { 

    //creando array inicial de objetos
    const objetos = [{
        id: 1,
        articulo: "Celular",
        marca: "Samsung",
        color: "Blanco",
        precio: 250
    },
    {
        id: 2,
        articulo: "Lavarropas",
        marca: "Philips",
        color: "Blanco",
        precio: 1500
    },
    {
        id: 3,
        articulo: "Celular",
        marca: "Huawei",
        color: "Negro",
        precio: 1250
    },
    {
        id: 4,
        articulo: "Celular",
        marca: "Samsung",
        color: "Negro",
        precio: 750
    },
    {
        id: 5,
        articulo: "Auriculares",
        marca: "Lenovo",
        color: "Negros",
        precio: 50
    },
    {
        id: 6,
        articulo: "Mouse",
        marca: "Logitech",
        color: "Gris",
        precio: 670
    },
    {
        id: 7,
        articulo: "Teclado",
        marca: "Aorus",
        color: "Blanco",
        precio: 580
    },
    {
        id: 8,
        articulo: "Microfono",
        marca: "Aorus",
        color: "Negro",
        precio: 1100
    }
    ];

    //guardando array inicial en una variable de estado
    const [lista, setLista] = useState(objetos);

    //funcion que elimina los elementos, se le pasa un parametro id para identificar el objeto
    //a eliminar
    const eliminarElementos = (id) => {
        //se hace un filtrado del array con los objetos que no coinciden con el id
        const nuevoArray = lista.filter((articulo) => articulo.id !== id);
        //se setea nuevamente la variable de estado con el array filtrado
        setLista(nuevoArray);
    }


    return(<>
    <div>
        <h2>18. Eliminar elementos renderizados</h2>

        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Articulo</td>
                        <td>Marca</td>
                        <td>Color</td>
                        <td>Precio</td>
                    </tr>
                </thead>
                <tbody>
                    {/* se renderiza la tabla completa */}
                    {lista.map((art) => {
                        return(<tr key={art.id}>
                            <td>{art.id}</td>
                            <td>{art.articulo}</td>
                            <td>{art.marca}</td>
                            <td>{art.color}</td>
                            <td>{art.precio}</td>
                            {/* se agrega boton Eliminar al lado de cada producto, 
                            se escucha un evento onClick y se crea una callback llamando a la
                            funcion eliminarElementos pasandole por parametro el id del producto */}
                            <td><button onClick={() => eliminarElementos(art.id)}>Eliminar</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>

    </div>
    </>)

}

export default EliminarElementos;



