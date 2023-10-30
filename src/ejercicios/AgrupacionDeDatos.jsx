

//35. Agrupación de datos: Dado un arreglo de objetos con propiedades, utiliza reduce para 
//agrupar los objetos en categorías específicas.


const AgrupaDatos = () => {

    const arrayObjetos = [{
            id: 1,
            nombre: "auto",
            modelo: 94,
            color: "rojo",
            marca: "ferrari"
        },
        {
            id: 2,
            nombre: "auto",
            modelo: 07,
            color: "negro",
            marca: "volskwagen"
        },
        {
            id: 3,
            nombre: "auto",
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
            nombre: "auto",
            modelo: 01,
            color: "rojo",
            marca: "chevrolet"
        },
        {
            id: 6,
            nombre: "auto",
            modelo: 16,
            color: "negro",
            marca: "Fiat"
        }
    ]

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
                {arrayObjetos.map((producto) =>{
                    return(<tr key={producto.id}>
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