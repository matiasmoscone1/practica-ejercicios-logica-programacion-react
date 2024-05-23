import { useState, createContext } from "react";

const CambiaTema = () => {

    const themeContext = createContext();

    const [estado, setEstado] = useState(false);

    


    return(<>
    
        <themeContext.Provider value={estado}>
            <App/>
        </themeContext.Provider>

    </>)


}


export default CambiaTema;






