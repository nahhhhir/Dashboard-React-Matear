import React from "react";

import "../assets/css/header.css";
import foto from "../assets/images/LogoMateAr.png"

function NavBar() {
    return (
        <React.Fragment>
            {/*<!-- Topbar -->*/}
            <div className="header">
                <a href="/">
                    <img src={foto} alt="logo matear" width="300"/>
                </a>

                <form action="/search" method="get" className="busqueda">
                    <input type="text" name="buscar" placeholder="Buscar producto..." className="cuadrado-busqueda"/>
                        <button type="submit" className="button-busqueda"><i className="fas fa-fw fa-search"></i></button>
                </form>

                <nav className="nav">
                    <a href="/">Inicio</a>
                    <a href="/">Catalogo</a>
                    <a href="/">Registro</a>
                    <a href="/">Inicio sesion</a>
                </nav>
            </div>
            {/*<!-- End of Topbar -->*/}
        </React.Fragment>
    );
}

export default NavBar;