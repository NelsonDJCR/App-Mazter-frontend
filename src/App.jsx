import React from "react";
import "./App.css";
import { Routing } from "./config/Routing";
import ExampleContextProvider from "./context/ExampleContext";
function App() {
    return (
        <div className="App">
            <ExampleContextProvider>
                <Routing />
            </ExampleContextProvider>
        </div>
    );
}

export default App;
