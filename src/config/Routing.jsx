import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../components/Index";
import { ExampleContext } from "../context/ExampleContext";
import { NelsonContext } from "../context/NelsonContext";
import Main from "../pages/layouts/Main";
import Dasboard from "../pages/Dashboard";
import CashRegister from "../pages/CashRegister";
import ProductAdd from "../pages/ProductAdd";
import ProductList from "../pages/ProductList";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
export const Routing = () => {
    const auth = true;
    return (
        <>
            {auth ? (
                <Main>
                    <Routes>
                        <Route path="/" element={<Dasboard />} />
                        <Route path="/dashboard" element={<Dasboard />} />
                        <Route
                            path="/cash-register"
                            element={<CashRegister />}
                        />
                        <Route path="/product-add" element={<ProductAdd />} />
                        <Route path="/product-list" element={<ProductList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Main>
            ) : (
                <>
                    <Routes>
                        <Route path="*" element={<>404</>} />
                        <Route path="/" element={<>Home</>} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </>
            )}
        </>
    );
};
