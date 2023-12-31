
//16. Crea un componente de React que tome una lista de objetos y muestre solo los 
//elementos cuyo valor de una propiedad específica cumple con cierto criterio 
//(por ejemplo, mostrar solo los elementos con un precio superior a $50).
//con un input para determinar el precio a calcular

import { useState } from "react";

//creando componente
const ObjetosValor = () => {

    //creando array de articulos, cada articulo es un objeto
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

    //creando variables de estado, el valorInput refleja el input escrito por el usuario
    const [valorInput, setValorInput] = useState(0);
    const [valorInputText, setValorInputText] = useState("");
    //el arrayObjetos almacena el array de objetos
    const [arrayObjetos, setArrayObjetos] = useState(objetos);

    //console.log(valorInput);

    //creando funcion donde filtra los precios dado un valor (precio) pasado por parametro
    const filtrar = () => {
        //crea una constante de objetosFiltrados donde almacena el array filtrado con los objetos
        //de menor precio al pasado por parametro
    
        //si el usuario escribe el input del precio, ejecuta el codigo
        if(valorInput !== ""){
            //console.log(typeof val);
            const objetosFiltrados = arrayObjetos.filter((art) => art.precio < valorInput);
            //setea el array nuevo filtrado al valor de la variable de estado
            setArrayObjetos(objetosFiltrados);
        }
        //si el usuario escribe cualquier input, articulo, color o marca
        if(valorInputText !== ""){
            //toma el valor del input y lo convierte a minuscula
            const cadena = valorInputText.toLowerCase();
            //console.log(cadena);
            //filtra el array de objetos dependiendo el input escrito y compara con el articulo
            //o con el color o con la marca correspondientemente a ver si existe
            const productosFiltrados = arrayObjetos.filter((prod) => prod.articulo.toLowerCase() === cadena
            || prod.color.toLowerCase() === cadena || prod.marca.toLowerCase() === cadena);
            //setea nuevamente el array filtrado con los productos filtrados
            setArrayObjetos(productosFiltrados);
        }
    }


    //componente que renderiza la tabla completa
    const TablaRenderizada = () => {
        return(
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
                {/* Mapea (recorre) el array completo y por cada articulo, crea una fila en la tabla
                con los respectivos datos */}
                {arrayObjetos.map((art) => {
                    return (<tr key={art.id}>
                        <td>{art.articulo}</td>
                        <td>{art.marca}</td>
                        <td>{art.color}</td>
                        <td>{art.precio}</td>
                    </tr>)
                })}
            </tbody>
        </table>
        )
    }

    return (<>
        <div>
            <h2>16. Objetos con un valor mayor a precio especifico</h2>

            <label>Precio(max): </label>
            {/* Input que queda con el valor mientras le va escribiendo encima el usuario,
            los botones tienen sus respectivas funciones, el "Todos" setea nuevamente el array
            original con todos los productos */}
            <input type="number" placeholder="Escriba el precio" onChange={(e) => { setValorInput(e.target.value) }} />{" "}
            <br/><br/>
            <label>Articulo: </label>
            <input type="text" placeholder="Escriba el articulo" onChange={(e) => { setValorInputText(e.target.value) }}/><br/><br/>
            <label>Marca: </label>
            <input type="text" placeholder="Escriba la marca" onChange={(e) => { setValorInputText(e.target.value) }} /><br/><br/>
            <label>Color: </label>
            <input type="text" placeholder="Escriba el color" onChange={(e) => { setValorInputText(e.target.value) }} /><br/><br/>
            <button onClick={() => filtrar()}>Filtrar</button>{" "}
            {/*<button onClick={() => filtrarProductos(valorInputText)}>Filtrar x str</button>{" "}*/}
            <button onClick={() => setArrayObjetos(objetos)}>Todos</button>
            <br /><br />

            {/* llama al componente para renderizar la tabla */}
            <TablaRenderizada />

        </div>

    </>)

}

export default ObjetosValor;



