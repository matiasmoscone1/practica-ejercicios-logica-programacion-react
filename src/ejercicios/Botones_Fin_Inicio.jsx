


const Botones_Fin_Inicio = () => {


    const fin = () => {
        return(window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        }));        
    }

    const inicio = () => {
        return(window.scrollTo({
            top: (!document.body.scrollHeight),
            behavior: "smooth"
        }));        
    }


    return(<>
        <div className="btn-container">
            <button className="btn-inicio" onClick={() => inicio()}>Inicio</button>{" "}
            <button className="btn-fin" onClick={() => fin()}>Fin</button>
        </div>
    </>)

}   


export default Botones_Fin_Inicio;



