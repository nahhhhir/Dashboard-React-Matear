import React from "react";

import '../assets/css/registro.css'

function Registro() {
    return (
        <div >
            <main class="main2">
                <form method="POST" class="box-register" action="/users/registro" enctype="multipart/form-data">

                    <h1>Regristro</h1>

                    <label class="registro">Nombre de usuario</label>
                    <input type="text" name="username" placeholder="User123456" id="user"
                        class="in-register" value="<%= ey && ey.username ? ey.username : '' %>"/>

                        <label class="registro">Nombre y apellido</label>
                        <input type="text" name="name_lastName" placeholder="Gustavo Cerati" id="name"
                            class="in-register" value="<%= ey.name_lastName || '' %>"/>

                            <label class="registro">Correo electrónico</label>
                            <input type="email" name="email" placeholder="genarorafault@gmail.com" id="email"
                                class="in-register" value="<%= ey.email || '' %>"/>

                                <label class="registro">Pais</label>
                                <select name="country"
                                    class="in-register form-select" value="<%= ey.country || '' %>">

                                    <option value="">Selecciona un Pais</option>
                                    <opion>Argentina", "Colombia", "Peru", "Canada","Brasil", "España"</opion>

                                </select>


                                <label class="registro">Domicilio</label>
                                <input type="text" name="direction" placeholder="Calle numero"
                                    class="in-register form-control" value="<%= ey.direction || '' %>"/>

                                    <label class="registro">Avatar</label>
                                    <input type="file" name="avatar" style="border: none" id="imag"
                                        class="in-register" value="<%= ey.avatar || '' %>"/>



                                        <label class="registro">Contraseña</label>
                                        <input type="password" name="password" placeholder="123456789" id="contra"
                                            class="in-register"/>


                                            <label class="registro">
                                                <input type="radio" name="terminos_y_condiciones"/> 
                                                Acepto terminos y condiciones</label>

                                            <div class="boton">
                                                <button type="submit" class="boton-registro">Crear cuenta</button>
                                                <button type="reset" class="boton-registro">Borrar</button>
                                            </div>
                                        </form>
                                    </main>
                                </div>
                                );
}
export default Registro;