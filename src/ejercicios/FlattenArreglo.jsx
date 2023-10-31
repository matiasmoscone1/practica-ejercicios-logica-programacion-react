

//36. Flatten de arreglos anidados: Dado un arreglo de arreglos, utiliza reduce para 
//aplanar la estructura y obtener un único arreglo con todos los elementos.

const FlattenDeArreglos = () => {

    const arrayPrincipal = [[1,6,3,9,14], ["hola", "como", "andas"], [1, true, "hola", false],
    [{nombre: "matias", apellido: "moscone", edad: 27}], ["hola", 54, {objeto: "esto es un objeto"}]];


    const reducirArreglo = (arr) => {
        const nuevoArray = arr.reduce((acc, val) => {
            acc.push(val);
            return(acc);
        }, []);
        console.log(nuevoArray);
    }

    console.log(arrayPrincipal);

    reducirArreglo(arrayPrincipal);

    return(<>
    <div>
        <h2>36. Flatten de arreglos anidados con reduce</h2>

        {`[${arrayPrincipal.join("-")}]`}



    </div>
    </>)

}

export default FlattenDeArreglos;
