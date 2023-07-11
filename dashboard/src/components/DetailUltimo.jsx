import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import imagen from '../assets/images/mate3.jpeg'
import '../assets/css/detail.css'

function DetailUltimo() {
	const [categorias, setCategorias] = useState({})
	const [ultimoProducto, setUltimoProducto] = useState({})


	useEffect(() => {
		fetch("http://localhost:3008/api/products")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setCategorias(data.countByCategory);
				setUltimoProducto(data.products[data.products.length -1])
			})
			.catch((error) => {
				console.error(error);
			});
	}, [])

	return (
		<div className="todo">
			{/** Ultimo Producto */}
			<div className="fondo">
				<div className="card mb-4" style={{ backgroundColor: '#5F8D4E', color: '#E5D9B6', border: 'none' }}>
					<div className="card-header py-4" style={{ backgroundColor: '#5F8D4E', borderColor: '#E5D9B6' }}>
						<h5 className="m-0 font-weight-bold text-white-800">Ultimo producto vendido</h5>
					</div>
					<div className="card-body" id="flex">
						<img className="img" src={ultimoProducto.image} alt="imagen demostrativa"/>
						<div className="text">
							<h3>{ ultimoProducto.name }</h3>
							<h5>Categoria: { ultimoProducto.categories }</h5>
							<p>{ ultimoProducto.description }</p>
							<Link className="btn btn-danger" rel="nofollow" to={`/productos/${ultimoProducto.id}`}>
							Detalle del producto
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/** Categorias  */}
			<div className="col-lg-5 mb-4">
				<div className="card mb-4" style={{ backgroundColor: '#5F8D4E', color: '#E5D9B6', border: 'none' }}>
					<div className="card-header py-4" style={{ backgroundColor: '#5F8D4E', borderColor: '#E5D9B6' }}>
						<h5 className="m-0 font-weight-bold text-white-800">Categorias</h5>
					</div>
					<div className="card-body">
						<div className="row">
							
							{Object.keys(categorias).map((cate) => {
								return <div className="col-lg-6 mb-4">
									<div className="card bg-dark text-white">
										<div className="card-body">
										{cate}: {categorias[cate]}
										</div>
									</div>
								</div>
							})}

						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default DetailUltimo;