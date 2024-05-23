import { useState, createContext } from "react";
import App from "../App";

const CambiaTema = () => {

    const themeContext = createContext();

    const [estado, setEstado] = useState(false);




    return(<>
    
        <themeContext.Provider value={estado}>
            <button onClick={setEstado(!estado)}>
                <App />
            </button>

        </themeContext.Provider>

    </>)


}


export default CambiaTema;






