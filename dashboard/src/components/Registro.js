import React from "react";

import '../assets/css/registro.css'

function Registro() {
    return (
        <div className="main2">
            <form method="POST" className="box-register" action="/">
                <h1 className="registrotitle">Regristro</h1>

                <label className="registro">Nombre de usuario</label>
                <input type="text" name="username" placeholder="User123456" id="user"
                    className="in-register" />

                <label className="registro">Nombre y apellido</label>
                <input type="text" name="name_lastName" placeholder="Gustavo Cerati" id="name"
                    className="in-register" />

                <label className="registro">Correo electrónico</label>
                <input type="email" name="email" placeholder="genarorafault@gmail.com" id="email"
                    className="in-register" />

                <label className="registro">Pais</label>
                <select name="country" className="in-register form-select">
                    <option value="argentina">Argentina</option>
                    <option value="colombia">Colombia</option>
                    <option value="peru">Peru</option>
                    <option value="brasil">Brasil</option>
                    <option value="españa">España</option>
                </select>

                <label className="registro">Domicilio</label>
                <input type="text" name="direction" placeholder="Calle numero"
                    className="in-register form-control" />

                <label className="registro">Avatar</label>
                <input type="file" name="avatar" id="imag"
                    className="in-register" />

                <label className="registro">Contraseña</label>
                <input type="password" name="password" placeholder="123456789" id="contra"
                    className="in-register" />

                <label className="registro">
                    <input type="radio" name="terminos_y_condiciones" />
                    Acepto terminos y condiciones</label>

                <div className="boton">
                    <button type="submit" className="boton-registro">Crear cuenta</button>
                    <button type="reset" className="boton-registro">Borrar</button>
                </div>
            </form>
        </div>
    );
}
export default Registro;