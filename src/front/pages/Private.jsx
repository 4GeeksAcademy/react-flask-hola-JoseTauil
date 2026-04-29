import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="container mt-5 text-center">
            <div className="alert alert-info">
                <h1>Área Privada</h1>
                <p>Bienvenido. Solo tú puedes ver este contenido.</p>
            </div>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndzB6MHFqZzR3eHh3eHh3eHh3eHh3eHh3eHh3eHh3eHh3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKSjPBe6X4oV2pG/giphy.gif" alt="Success" />
        </div>
    );
};