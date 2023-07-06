import React, { useEffect, useState } from "react";

import '../assets/css/listProducts.css'

function ListProducts() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3008/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductos(data.products)
      })
      .catch((error) => {
        console.error(error);
      });


  }, [])


  return (
    <div className="main4">
      
      <section className="filtro">
        <button className="boton-fil">Mate</button>
        <button className="boton-fil">Bombilla</button>
        <button className="boton-fil">Termo</button>
        <button className="boton-fil">Set</button>
      </section>

      <section className="array-products">

        {productos.map((producto) => (
          <article className="producto">

            <h2 key={producto.id} className="codigo">Codigo del producto: {producto.id}</h2>
            <h3>{producto.name}</h3>
            <p > {producto.categories} </p>
            <p className="descripcion">{producto.description}</p>
            <span className="precio">{producto.price}</span>

          </article>
        ))}

      </section>
    </div>
  );
}

export default ListProducts;
