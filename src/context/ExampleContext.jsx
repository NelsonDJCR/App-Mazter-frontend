import React, { useState } from "react";

export const ExampleContext = React.createContext({});

export default function ExampleContextProvider({ children }) {
    const [saludo, setSaludo] = useState("Hello world");

    return (
        <ExampleContext.Provider value={{ saludo, setSaludo }}>
            {children}
        </ExampleContext.Provider>
    );
}
