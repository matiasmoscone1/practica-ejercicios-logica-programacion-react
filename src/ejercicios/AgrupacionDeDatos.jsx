

//35. Agrupación de datos: Dado un arreglo de objetos con propiedades, utiliza reduce para 
//agrupar los objetos en categorías específicas.
import { useState } from "react";

const AgrupaDatos = () => {

   
    //creando array de objetos principal
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

    //creando variables de estado
    const [autos, setAutos] = useState(objetos);


    //creando funcion agrupadora, que pasa por parametro un array de objetos y la palabra clave 
    //por la que se quiere agrupar
    const agrupaObjetos = (arr, opc) => {
        //se aplica un reduce al array pasado por parametro
         const nuevoArray = arr.reduce((acc, val) => {
            //se compara las propiedades de los objetos con la palabra, si coincide
            if(val.nombre === opc || val.marca === opc || val.color === opc){
                //se le agrega al acumulador el objeto
                acc.push(val);
            }
            //retorna el acumulador con todos los objetos agrupados (filtrados)
            return acc;
        //se inicializa acumulador como array vacio
        }, []);
        //console.log(nuevoArray);
        
        //se setea nuevamente la variable de estado con el array de objetos agrupados
        setAutos(nuevoArray);
    }
    
    return(<>
        <div>
        <h2>35. Agrupa los objetos en categorias especificas con reduce</h2>
        {/* se renderiza tabla de objetos */}
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
        <br/>
        {/* para cada boton se le pasa la palabra clave del argumento especifico para q ejecute la logica */}
        <button onClick={() => agrupaObjetos(autos, "auto")}>Autos</button>{" "}
        <button onClick={() => agrupaObjetos(autos, "camioneta")}>Camionetas</button>{" "}
        <button onClick={() => agrupaObjetos(autos, "rojo")}>Rojo</button>{" "}
        <button onClick={() => agrupaObjetos(autos, "blanco")}>Blanco</button>{" "}
        <button onClick={() => agrupaObjetos(autos, "mclaren")}>Mclaren</button>{" "}
        <button onClick={() => setAutos(objetos)}>Todos</button>{" "}
        
        </div>
    
    </div>
    </>)


}

export default AgrupaDatos;