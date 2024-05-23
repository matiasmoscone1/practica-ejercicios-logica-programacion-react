import { useState } from "react";

const CambiaTema = () => {

    const themeContext = React.createContext();

    const [estado, setEstado] = useState(false);

    const cambiaColor = () => {


    }
    
    return(<>
    
        <themeContext.Provider>
            <button className="btn-context"></button>
        </themeContext.Provider>

    </>)


}


export default CambiaTema;






