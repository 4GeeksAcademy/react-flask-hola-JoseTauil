import { useEffect } from "react";

export const Private = () => {

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return <h1>Zona privada 🔐</h1>;
};