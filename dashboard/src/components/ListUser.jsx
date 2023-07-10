import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import '../assets/css/listUser.css'

function ListUser() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:3008/api/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsuarios(data.users)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div className="main4">

            <section className="array-products">

            {usuarios.map((user) => (
                <article className="producto">

                <h2 key={user.id} className="codigo">Codigo del usuario: {user.id}</h2>
                <h3>{user.name}</h3>
                <p>{ user.email }</p>
                <Link to={`/listuser/${user.id}`} className="detalle-boton">
                    Detalle de {user.id}
                </Link>
    
                </article>
            ))}

            </section>

        </div>
    )
}

export default ListUser;