import React from "react";
import "./App.css";
import { Routing } from "./config/Routing";
import ExampleContextProvider from "./context/ExampleContext";
import Provider from "./Provider";
function App() {
    return (
        <div className="App">
            <Provider>
                <Routing />
            </Provider>
        </div>
    );
}

export default App;
