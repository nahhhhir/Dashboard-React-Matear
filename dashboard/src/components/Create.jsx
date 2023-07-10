import React from "react";

import '../assets/css/create.css'

function Create() {
	return (
		<div >

			<main class="main1">
				<form action="/" method="POST" class="create">
					<h1 class="titulo1">Creacion del producto</h1>

					<label class="label-create">Nombre del producto</label>
					<input type="text" name="name" placeholder="Nombre" class="input"/>

					<label class="label-create">Descripcion del producto</label>
					<input type="text" name="description" placeholder="descripcion" class="input"/>

					<label class="label-create">Precio del producto</label>
					<input type="number" name="price" placeholder="Precio" class="input"/>

					<label class="label-create">Imagen del producto</label>
					<input type="file" name="image" placeholder="Imagen" class="file"/>

					<label class="label-create">Categoria del producto</label>
					<select name="category_id" class="form-select">
						<option value="mate">Mate</option>
						<option value="termo">Termo</option>
						<option value="yerba">Yerba</option>
						<option value="bombilla">Bombilla</option>
						<option value="kit de mate">Kit de mate</option>
					</select>

					<div class="boton1">
						<button type="submit" class="button">Subir</button>
					</div>
				</form>
			</main>

		</div>
	);
}

export default Create;