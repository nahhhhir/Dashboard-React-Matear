import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";

import avatar from '../assets/images/users/avatar.png'
import '../assets/css/detalleProducto.css'

function DetalleProducto() {
    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3008/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducto(data)
            })
            .catch((err) => console.error(err));
    }, [id]);


    return (
        <div>
            <section className="array-product">
            <h1 className="title">{ producto.name }</h1>

                <article className="products">
                    <img src={producto.image} alt="Producto 1" className="imagp" />
                    <h3>{ producto.name }</h3>
                    <p className="descripcion-de">{ producto.description }</p>
                    <span className="precio">{ producto.price }</span>
                </article>

            </section>

            <div className="botones">
                <div>

                <Link to="/editar" className='boton-admin'>Editar</Link>
                    <input type="submit" className="boton-admin" value="Eliminar" />
                </div>
            </div>

            <section>
                <h2 className="reseña-h2">Reseñas</h2>

                <section className="reseñas">
                    <img src={avatar} alt="user" className="img-" />
                    <div>
                        <h4>User6172783</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore non ipsam adipisci esse voluptatibus eos
                            tempore consequatur obcaecati laboriosam quos.</p>
                    </div>
                </section>
            </section>
        </div >
    );
}

export default DetalleProducto;