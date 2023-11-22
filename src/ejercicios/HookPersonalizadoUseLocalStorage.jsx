

//41. Hooks Personalizados: Crea un hook personalizado llamado useLocalStorage que permita 
//a los componentes almacenar y recuperar datos en el almacenamiento local del navegador 
//de manera transparente.

const HookPersonalizadoUseLocalStorage = () => {

    console.log(localStorage);

    const myData = {key: "value"};
    localStorage.setItem("valor", JSON.stringify(myData));

    //localStorage.removeItem("Valor");

    //localStorage.clear();
    
    //localStorage.key();


    return(<>
    <div>
        <h2>41. Hook personalizado almacenamiento local del navegador </h2>
        <input />
        
    </div>
    </>)

}

export default HookPersonalizadoUseLocalStorage;

