

//35. Agrupación de datos: Dado un arreglo de objetos con propiedades, utiliza reduce para 
//agrupar los objetos en categorías específicas.
import { useState } from "react";

const AgrupaDatos = () => {

   

    const objetos = [{
            id: 1,
            nombre: "auto",
            modelo: 94,
            color: "rojo",
            marca: "ferrari"
        },
        {
            id: 2,
            nombre: "auto",
            modelo: 7,
            color: "blanco",
            marca: "mclaren"
        },
        {
            id: 3,
            nombre: "camioneta",
            modelo: 22,
            color: "azul",
            marca: "ford"
        },
        {
            id: 4,
            nombre: "auto",
            modelo: 99,
            color: "blanco",
            marca: "mclaren"
        },
        {
            id: 5,
            nombre: "camioneta",
            modelo: 1,
            color: "rojo",
            marca: "chevrolet"
        },
        {
            id: 6,
            nombre: "camioneta",
            modelo: 16,
            color: "negro",
            marca: "Fiat"
        }
    ];

    const [autos, setAutos] = useState(objetos);

    console.log(autos);

    return(<>
        <div>
        <h2>35. Agrupa los objetos en categorias especificas con reduce</h2>

        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Modelo</td>
                        <td>Color</td>
                        <td>Marca</td>
                    </tr>
                </thead>
                <tbody>
                {autos.map((producto) =>{
                    return(<tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.modelo}</td>
                        <td>{producto.color}</td>
                        <td>{producto.marca}</td>
                    </tr>)
                })}

                </tbody>
            </table>
        </div>
    
    </div>
    </>)


}

export default AgrupaDatos;