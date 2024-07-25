import { useState } from "react";


export const ContextGithub = createContext();

export const ContextProvider = ({ children }) => {

    const [dataGithub, setDataGithub] = useState();



    return(<ContextGithub.Provider value={{}}>
        { children }
    </ContextGithub.Provider>);

}


