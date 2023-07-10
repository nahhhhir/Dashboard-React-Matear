import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import '../assets/css/listUser.css'

function DetalleUser() {
    const { id } = useParams()
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3008/api/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsuario(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div>

            <section className="array-product">
                <h1 className="title">{ usuario.name }</h1>

                <article className="products">
                    <img src={ usuario.image } alt="imagen user" className="imaguser" />
                    <h3> Codigo del usuario: { usuario.id }</h3>
                    <p className="descripcion-de">{ usuario.user_name }</p>
                    <p className="descripcion-de">{ usuario.email }</p>
                    <p className="descripcion-de">{ usuario.direction }</p>
                    <p className="descripcion-de">{ usuario.country }</p>
                </article>

            </section>

        </div>
    )
}

export default DetalleUser;