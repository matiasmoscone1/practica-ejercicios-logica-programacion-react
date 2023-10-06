
//21. Eliminar Duplicados: Escribe una función que tome un array y elimine los elementos 
//duplicados, devolviendo un nuevo array sin duplicados.

import { useState } from "react";

//creando componente 
const EliminaDuplicados = () => {

    //creando array inicial de numeros
    const array = [2,2,6,15,8,6,22,3,9,12,3,3];
    //creando array nuevo como variable de estado
    const [nuevoArray, setNuevoArray] = useState([]);


    //creando funcion que elimina los duplicados
    const eliminaDuplicados = () => {
        //se crea una nueva coleccion llamada "numeros"
        const numeros = new Set();
        //recorre array completo y va agregando a la coleccion los numeros, no repetidos, ya que
        //el Set (coleccion) almacena valores unicos
        array.map((num) => {
            numeros.add(num);
        });
        //console.log(numeros);
        //convierte y almacena ese Set en el array y lo asigna a la variable de estado
        setNuevoArray(Array.from(numeros));
    }



    return(<>
    <div>
        <h2>21. Elimina duplicados de un array</h2>
        {/* Se muestra el array inicial en pantalla */}
        {`[${array.join(",")}]`}{" "}
        {/* boton que llama a la funcion eliminaDuplicados al hacer click */}
        <button onClick={() => eliminaDuplicados()}>Eliminar Duplicados</button>{" "}
        {/* Muestra el nuevo array sin duplicados en pantalla */}
        {`[${nuevoArray.join(",")}]`}

    </div>
    </>)

}

export default EliminaDuplicados;

