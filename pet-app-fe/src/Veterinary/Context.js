import { useState, createContext } from "react"
export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
    const [input, setInput] = useState("Çorlu");
    const [output, setOutput] = useState([]);
    const values = {
        input,
        setInput,
        output,
        setOutput,
    };

    return (
        <CityContext.Provider value={values}>
            {children}
        </CityContext.Provider>
    );
};