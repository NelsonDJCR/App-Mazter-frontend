import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../components/Index";
import { ExampleContext } from "../context/ExampleContext";
import { NelsonContext } from "../context/NelsonContext";


const NotFound = () => {
    return (
        <>
            <Index />
            <h1>404 not Found</h1>
        </>
    );
};
export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
