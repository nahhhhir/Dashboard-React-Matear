import React, { useState, useEffect } from "react";

import '../assets/css/totals.css';
import { faShoppingCart, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TotalS() {
    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState(0)

    useEffect(() => {
        fetch("http://localhost:3008/api/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProductos(data.count)
                setCategorias(Object.keys(data.countByCategory).length);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    useEffect(() => {
        fetch("http://localhost:3008/api/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsuarios(data.count)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div className="todo">

            <div className="col-md-3 mb-4">
                <div className="card h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col">
                                <div className="font-weight-bold text-uppercase">Cantidad productos</div>
                                <h3>{productos}</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mb-4">
                <div className="card  h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="font-weight-bold text-uppercase">Total Categorias</div>
                                <h3>{categorias}</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTags} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mb-4">
                <div className="card h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="font-weight-bold text-uppercase">Cantidad usuarios</div>
                                <h3>{usuarios}</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TotalS;