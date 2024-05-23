import { useState } from "react";

const CambiaTema = () => {

    const themeContext = React.createContext();

    const [estado, setEstado] = useState(false);

    if(estado){
        document.querySelector(".btn-context").style.color = "#000000";
    }


    return(<>
    
        <themeContext.Provider value={estado}>
            <button onClick={setEstado(!estado)} className="btn-context"></button>
        </themeContext.Provider>

    </>)


}


export default CambiaTema;






