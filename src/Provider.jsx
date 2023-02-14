import AuthContextProvider from "./context/AuthContext";
import UserContextProvider from "./context/userContext";
export default function Provider({ children }) {
    return (
        <UserContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </UserContextProvider>
    );
}
