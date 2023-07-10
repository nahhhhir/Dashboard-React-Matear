import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/header.css";
import foto from "../assets/images/LogoMateAr.png"

function Header() {
    return (
        <React.Fragment>
            {/*<!-- Topbar -->*/}
            <div className="header">

                <Link to="/">
                <img src={foto} alt="logo matear" width="300" />
                </Link>

                <form action="/search" method="get" className="busqueda">
                    <input type="text" name="buscar" placeholder="Buscar producto..." className="cuadrado-busqueda" />
                    <button type="submit" className="button-busqueda"><i className="fas fa-fw fa-search"></i></button>
                </form>

                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/listuser">Usuarios</Link>
                    <Link to="/crear">Creacion</Link>
                    
                </nav>
            </div>
            {/*<!-- End of Topbar -->*/}
        </React.Fragment>
    );
}

export default Header;