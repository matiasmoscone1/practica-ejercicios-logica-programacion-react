
//16. Crea un componente de React que tome una lista de objetos y muestre solo los 
//elementos cuyo valor de una propiedad específica cumple con cierto criterio 
//(por ejemplo, mostrar solo los elementos con un precio superior a $50).
//con un input para determinar el precio a calcular

import { useState } from "react";
const ObjetosValor = () => {

    const Objetos = [{
        articulo: "Celular",
        marca: "Samsung",
        color: "Blanco",
        precio: 250
    },
    {
        articulo: "Lavarropas",
        marca: "Philips",
        color: "Blanco",
        precio: 1500
    },
    {
        articulo: "Celular",
        marca: "Huawei",
        color: "Negro",
        precio: 150
    },
    {
        articulo: "Celular",
        marca: "Samsung",
        color: "Negro",
        precio: 750
    },
    {
        articulo: "Auriculares",
        marca: "Lenovo",
        color: "Negros",
        precio: 50
    },
    {
        articulo: "Mouse",
        marca: "Logitech",
        color: "Gris",
        precio: 170
    },
    {
        articulo: "Teclado",
        marca: "Aorus",
        color: "Blanco",
        precio: 180
    },
    {
        articulo: "Microfono",
        marca: "Aorus",
        color: "Negro",
        precio: 110
    }
    ]


    return (<>
        <div>
            <h2>16. Objetos con un valor mayor a precio especifico</h2>





        </div>

    </>)

}

export default ObjetosValor;



