import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar"; 

export const Layout = () => {
    return (
        <div>
            <Navbar />
            {/* Si no pones Outlet, las páginas (Home, Signup) no se renderizan */}
            <Outlet /> 
        </div>
    );
};