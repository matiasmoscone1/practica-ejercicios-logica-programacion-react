import { useState } from "react";
import { createContext } from "react";

export const ContextGithub = createContext();

export const ContextGithubProvider = ({ children }) => {

    const [dataGithub, setDataGithub] = useState();



    return(<ContextGithub.Provider value={{ dataGithub, setDataGithub }}>
        { children }
    </ContextGithub.Provider>);

}


