import React from "react";

import imagen from '../assets/images/mate3.jpeg'
import '../assets/css/detail.css'

function detailUltimo() {
	return (
		<div className="todo">
			
			{/** Ultimo Producto */}
			<div className="fondo">
				<div className="card mb-4" style={{backgroundColor: '#5F8D4E', color: '#E5D9B6',  border:'none'}}>
					<div className="card-header py-4" style={{backgroundColor: '#5F8D4E', borderColor: '#E5D9B6'}}>
						<h5 className="m-0 font-weight-bold text-white-800">Ultimo producto vendido</h5>
					</div>
					<div className="card-body" id="flex">
							<img className="img" src={imagen} alt="producto.name"/>
						<div className="text">
						<p>Descripcion lore kjdsbhakjd dsajkfhska dosaifhbiewa fio n fhei uhirrieuagqiugiuergr iw eugheriquwequ</p>
						<a className="btn btn-danger" rel="nofollow" href="/">Detalle del producto</a>
						</div>
					</div>
				</div>
			</div>
			
			{/** Categorias  */}
			<div className="col-lg-5 mb-4">
				<div className="card mb-4" style={{backgroundColor: '#5F8D4E', color: '#E5D9B6',  border:'none'}}>
					<div className="card-header py-4" style={{backgroundColor: '#5F8D4E', borderColor: '#E5D9B6'}}>
						<h5 className="m-0 font-weight-bold text-white-800">Genres in Data Base</h5>
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white">
									<div className="card-body">
										Mate
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
										Bombilla
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
										Termo
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
										Set de mate
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
										Yerba
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
										Otros
									</div>
								</div>
							</div>
							

						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default detailUltimo;