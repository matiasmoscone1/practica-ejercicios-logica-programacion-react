
//16. Crea un componente de React que tome una lista de objetos y muestre solo los 
//elementos cuyo valor de una propiedad específica cumple con cierto criterio 
//(por ejemplo, mostrar solo los elementos con un precio superior a $50).
//con un input para determinar el precio a calcular

import { useState } from "react";
const ObjetosValor = () => {

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
        precio: 150
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
        precio: 170
    },
    {
        id: 7,
        articulo: "Teclado",
        marca: "Aorus",
        color: "Blanco",
        precio: 180
    },
    {
        id: 8,
        articulo: "Microfono",
        marca: "Aorus",
        color: "Negro",
        precio: 110
    }
    ]


    return (<>
        <div>
            <h2>16. Objetos con un valor mayor a precio especifico</h2>
            <br/>

            <table border={1}>
                <thead>
                <tr>
                    <th>Articulo</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>
                    {objetos.map((art) => {
                        return(<tr key={art.id}>
                            <td>{art.articulo}</td>
                            <td>{art.marca}</td>
                            <td>{art.color}</td>
                            <td>{art.precio}</td>
                        </tr>)
                    })}
                    <tr>
                        
                    </tr>
                </tbody>
            </table>

        </div>

    </>)

}

export default ObjetosValor;



