import React, { useState } from "react";

export const NelsonContext = React.createContext({});

export default function NelsonContextProvider({ children }) {
    const [siu, setSiu] = useState("Siuuuuuuuuuuuu");

    return (
        <NelsonContext.Provider value={{ siu, setSiu }}>
            {children}
        </NelsonContext.Provider>
    );
}
