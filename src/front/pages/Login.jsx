import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem("token", data.token);
            navigate("/private");
        } else {
            alert("Credenciales inválidas");
        }
    };

    return (
        <div className="container mt-5 w-50">
            <form onSubmit={handleLogin} className="border p-4 rounded shadow">
                <h2>Iniciar Sesión</h2>
                <input type="email" className="form-control mb-3" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                <input type="password" uncomfortable className="form-control mb-3" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="btn btn-success w-100">Entrar</button>
            </form>
        </div>
    );
};