
//18. Crea un componente de React que tome una lista de elementos y permita al usuario 
//eliminar elementos haciendo clic en un botón.

import { useState } from "react";

const EliminarElementos = () => { 

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
    ]


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
                    {objetos.map((art) => {
                        return(<tr key={art.id}>
                            <td>{art.id}</td>
                            <td>{art.articulo}</td>
                            <td>{art.marca}</td>
                            <td>{art.color}</td>
                            <td>{art.precio}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>

    </div>
    </>)

}

export default EliminarElementos;



