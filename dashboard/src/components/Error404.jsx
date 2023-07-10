import React from "react";

import '../assets/css/error.css'
import error from '../assets/images/mate.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Error() {
    return (
        <React.Fragment>
            <body className="errorbody">
                <h1 className="h1">404</h1>
                <p className="p">La pagina no fue encontrada vuelve a intentarlo o regresa a la pagina principal <Link to="/">Mate.Ar</Link></p>
                <p className="p">y mientras comienza a matear :D</p>
                <Link to="/">
                <img src={error} alt="matear" className="imagen"/>
                </Link>
            </body>
        </React.Fragment>
    );
}

export default Error;