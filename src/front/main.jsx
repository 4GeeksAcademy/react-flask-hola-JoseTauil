import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importación de componentes
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";
import { Layout } from "./pages/Layout";

const AppRoutes = () => {
    return (
        <BrowserRouter basename={import.meta.env.VITE_BASENAME || ""}>
            <Routes>
                {/* El Layout envuelve a las demás rutas y usa <Outlet /> */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/private" element={<Private />} />
                    {/* Ruta para errores 404 dentro de la app */}
                    <Route path="*" element={<h1 className="text-center mt-5">Página no encontrada</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

// Función para renderizar la aplicación
const renderApp = () => {
    const rootElement = document.getElementById('app');
    
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <AppRoutes />
            </React.StrictMode>
        );
    } else {
        // Si sale este error, el problema está 100% en el index.html
        console.error("Error crítico: No se encontró el elemento <div id='app'> en el index.html");
    }
};

// Ejecutamos el renderizado
renderApp();

export default AppRoutes;