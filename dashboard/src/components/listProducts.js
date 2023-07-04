import React from "react";

import '../assets/css/listProducts.css'
import product from '../assets/images/mate.jpg'

function ListProducts() {
  return (
    <div className="main4">

      <h1>Catalogo</h1>

      <section className="filtro">
        <button className="boton-fil">Mate</button>
        <button className="boton-fil">Bombilla</button>
        <button className="boton-fil">Termo</button>
        <button className="boton-fil">Set</button>
      </section>

      <section className="array-products">

        <article className="producto" >

          <img src={product} alt="Producto" className="imag" />
          <h3>name</h3>
          <p className="descripcion">description</p>
          <span className="precio">price</span>

        </article>

      </section>
    </div>
  );
}

export default ListProducts;
