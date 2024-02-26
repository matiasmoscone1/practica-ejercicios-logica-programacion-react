

//creando componente principal
const Botones_Fin_Inicio = () => {
    
    //creando funcion que lleva al final de la pagina
    const fin = () => {
        return(window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        }));        
    }

    //creando funcion que lleva al inicio de la pagina (inverso a la funcion fin)
    const inicio = () => {
        return(window.scrollTo({
            top: (!document.body.scrollHeight),
            behavior: "smooth"
        }));        
    }


    return(<>
        {/* div contenedor de botones que en cada click llame a la funcion correspondiente */}
        <div className="btn-container">
            <button className="btn-inicio" onClick={() => inicio()}>Inicio</button>{" "}
            <button className="btn-fin" onClick={() => fin()}>Fin</button>
        </div>
    </>)

}   


export default Botones_Fin_Inicio;



