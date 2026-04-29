import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Usamos la URL directa para asegurar que conecte con el backend
    const directUrl = "https://improved-sniffle-jjwp47v9-3001.app.github.dev/api/signup";

    try {
      const response = await fetch(directUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        alert("¡Usuario registrado con éxito!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert("Error: " + (errorData.msg || "No se pudo registrar"));
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("Error de conexión con el servidor");
    }
  }; // <--- Aquí termina handleSubmit

  return (
    <div className="container mt-5 w-50">
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-white">
        <h2 className="mb-4">Crear Cuenta</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="ejemplo@correo.com" 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="********" 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      </form>
    </div>
  );
}; // <--- Aquí termina el componente Signup