import React from "react";
import { Routing } from "./config/Routing";
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
