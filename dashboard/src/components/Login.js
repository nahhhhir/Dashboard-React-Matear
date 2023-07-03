import React from "react";

import '../assets/css/login.css'

function Login() {
    return (
        <div >
            <main className="main1">
			<div className="login-container">
				<p className="iniciar">Iniciar sesión</p>
				<form method="POST" className="form-acceso" action="/">

					<label className="login-sub">Correo electrónico</label>
					<input type="text" name="email" placeholder="correo" className="login-input"/>

					<label className="login-sub" id="contra">Contraseña</label>
					<input type="password" name="password" placeholder="hola81272" className="login-input"/>

				<label className="login-sub">
					<input type="checkbox" className="boton_remember"/>Recordar mi usuario
				</label>

				<div className="bottom">
					<button type="submit"
						className="boton-iniciar">Iniciar sesión</button>
			</div>
				</form>
				<h3 className="go-register">¿No tenes una cuenta? <a href="/registro"> Regístrate aquí</a></h3>
			</div>
		</main>
        </div>
    );
}

export default Login;