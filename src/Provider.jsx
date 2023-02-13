import ExampleContextProvider from "./context/ExampleContext";
import NelsonContextProvider from "./context/NelsonContext";
export default function Provider({ children }) {
    return (
        <NelsonContextProvider>
            <ExampleContextProvider>{children}</ExampleContextProvider>;
        </NelsonContextProvider>
    );
}
