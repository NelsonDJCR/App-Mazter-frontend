import React, { useState } from "react";

export const AuthContext = React.createContext({});

export default function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
