import { useState, createContext } from "react";
import App from "../App";

export const themeContext = createContext();

const CambiaTema = () => {

    

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






