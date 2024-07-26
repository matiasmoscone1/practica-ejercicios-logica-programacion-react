import { useState } from "react";
import { createContext } from "react";

export const ContextGithub = createContext();

export const ContextGithubProvider = ({ children }) => {

    const [dataGithub, setDataGithub] = useState(null);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return(<ContextGithub.Provider value={{ dataGithub, setDataGithub, username, setUsername,
    loading, setLoading, error, setError }}>
        { children }
    </ContextGithub.Provider>);

}


