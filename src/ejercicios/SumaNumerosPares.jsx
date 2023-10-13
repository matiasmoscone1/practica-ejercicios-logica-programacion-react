

//29. Suma de Números Pares: Dado un array de números, utiliza funciones de programación 
//funcional para calcular la suma de todos los números pares en el array.


const SumaNumerosPares = () => {

    const arrayNumeros = [2, 54, 67, 33, 85, 62, 72, 11, 16, 99];


    const cuentaPares = (arr) => {

        

    }



    return(<>
    <div>
        <h2>29. Suma los numeros pares de un array</h2>
        {`[${arrayNumeros.join(",")}]`}
        <button onClick={() => cuentaPares(arrayNumeros)}>Cuenta Pares</button>

    </div>
    </>)


}

export default SumaNumerosPares;
