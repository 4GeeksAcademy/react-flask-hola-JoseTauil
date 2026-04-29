import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await resp.json();

      if (!resp.ok) {
        alert(data.msg || "Error en registro");
        return;
      }

      alert("Usuario creado correctamente");

      // 👉 redirige a login
      window.location.href = "/login";

    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button>Register</button>
    </form>
  );
};