import React from "react";

import '../assets/css/totals.css';
import { faShoppingCart, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function totalS() {
    return (
            <div className="todo">

                <div className="col-md-3 mb-4">
                    <div className="card h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col">
                                    <div className="font-weight-bold text-uppercase">Cantidad productos</div>
                                    <h3>0</h3>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={ faShoppingCart }/>
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
                                    <h3>0</h3>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTags}/>
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
                                    <h3>0</h3>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUser}/>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>

            </div>
    );
}

export default totalS;