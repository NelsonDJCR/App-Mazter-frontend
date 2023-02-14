import AuthContextProvider from "./context/AuthContext";
import UserContextProvider from "./context/UserContext";
export default function Provider({ children }) {
    return (
        <AuthContextProvider>
            <UserContextProvider>{children}</UserContextProvider>
        </AuthContextProvider>
    );
}
