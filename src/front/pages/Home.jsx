import React from "react";

export const Home = () => {
    return (
        <div className="text-center mt-5">
            <h1>¡Hola! Esta es la Home</h1>
            <p>Si ves esto, las rutas están funcionando perfectamente.</p>
            <a href="/signup" className="btn btn-primary">Ir a Registro</a>
        </div>
    );
};