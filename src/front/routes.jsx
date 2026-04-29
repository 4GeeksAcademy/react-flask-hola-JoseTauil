import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout"; // <-- Ruta corregida (dentro de pages y con L mayúscula)
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup"; 
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "private",
                element: <Private />,
            },
        ],
    },
]);