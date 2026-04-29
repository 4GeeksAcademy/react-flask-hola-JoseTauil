import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!resp.ok) {
      alert("Error en login");
      return;
    }

    const data = await resp.json();

    if (data.token) {
      sessionStorage.setItem("token", data.token);
      window.location.href = "/private";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
};