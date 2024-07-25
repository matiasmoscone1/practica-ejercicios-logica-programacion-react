import { useState } from "react";


export const Contexto = createContext();

export const ContextProvider = ({ children }) => {

    const [dataGithub, setDataGithub] = useState();



    return(<Contexto.Provider value={{}}>
        { children }
    </Contexto.Provider>);

}


