import React from "react";

import '../assets/css/listProducts.css'
import product from '../assets/images/mate.jpg'

function ListProducts() {
  return (
    <div className="main">

      <h1>Catalogo</h1>

      <section className="filtro">
        <button className="boton-fil">Mate</button>
        <button className="boton-fil">Bombilla</button>
        <button className="boton-fil">Termo</button>
        <button className="boton-fil">Set</button>
      </section>

      <section className="array-products">

        <article className="producto" onclick="location.href='/">

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

{/**class App extends Component {
  render() {
    const data = [{name: "John Doe", "age": 44}, {name:"Jane Doe", "age": 45}]
    console.log('App started');
    return <div>
    {data.map(person => <p key={person.name}>{`${person.name}, ${person.age} years old`}</p>)}
    </div>
  }
} */}