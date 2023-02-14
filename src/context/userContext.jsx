import React, { useState } from "react";

export const UserContext = React.createContext({});

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(true);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
