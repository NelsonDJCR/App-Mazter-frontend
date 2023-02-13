import { Route, Routes, Link } from "react-router-dom";
import Index from "../components/Index";

import { authContext } from "../App";
import { useContext } from "react";

const Home = () => {
    const user = useContext(authContext);
    return (
        <>
            <Index />
            <h1>Home</h1>
            {user ? (
                <>
                    <p>Hello {user.name}</p>
                </>
            ) : null}
        </>
    );
};
const SearchPage = () => {
    return (
        <>
            <Index />
            <h1>Search Page</h1>
        </>
    );
};
const NotFound = () => {
    return (
        <>
            <Index />
            <h1>404 not Found</h1>
            <h5></h5>
        </>
    );
};

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
