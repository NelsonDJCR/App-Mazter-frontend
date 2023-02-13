import React from "react";
import { useState } from "react";
import "./App.css";
import { Routing } from "./config/Routing";

export const authContext = React.createContext();

function App() {
    const [user, setUser] = useState(null);

    const changeLogin = () => {
        if (user) {
            setUser();
        } else {
            setUser({ name: "Nelson" });
        }
    };

    return (
        <div className="App">
            <authContext.Provider value={user}>
                <button onClick={changeLogin}> Change login</button>
                <Routing />
            </authContext.Provider>
        </div>
    );
}

export default App;
