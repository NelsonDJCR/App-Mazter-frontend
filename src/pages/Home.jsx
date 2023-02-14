import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <h1>Home</h1>
            <br />
            <div>{authCtx.auth ? "Loged" : "No login"}</div>
            <br />
            <Link to={"/login"}>Login</Link>
        </>
    );
};

export default Home;
