import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem("token");

	const handleLogout = () => {
		sessionStorage.removeItem("token"); // Borramos el token
		navigate("/login"); // Redirigimos al login
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-3 shadow-sm">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<strong>React Auth App</strong>
				</Link>

				<div className="ml-auto">
					{!token ? (
						<>
							<Link to="/signup">
								<button className="btn btn-outline-primary me-2">Registro</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-primary">Entrar</button>
							</Link>
						</>
					) : (
						<button onClick={handleLogout} className="btn btn-danger">
							Cerrar Sesión
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};