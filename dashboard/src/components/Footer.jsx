import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faTruckFast} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faFacebook, faTwitter, faCcMastercard, faCcVisa} from '@fortawesome/free-brands-svg-icons'

import "../assets/css/footer.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer(){
    return (
        <React.Fragment>
			<footer className="footer">
			<section className="seccionesFooter">
        <p>Seguinos en nuestras redes sociales</p> 
        <section className="iconosFooter">
            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter}/></a>
        </section>
    </section>

    <section className="seccionesFooter">
        <p>Metodos de pago</p>
        <section className="iconosFooter">
            <FontAwesomeIcon icon={faCcMastercard}/>
            <FontAwesomeIcon icon={faCcVisa}/>
        </section>
    </section>

    <section className="seccionesFooter">
        <p>Informacion y contactos</p>
        <section className="iconosFooter">
            <Link to="/">
                <FontAwesomeIcon icon={faPhone}/>
            </Link>
            <FontAwesomeIcon icon={faEnvelope}/>
            <Link to="/catalogo">
                <FontAwesomeIcon icon={faTruckFast}/>
            </Link>
        </section>
    </section>

    <section className="pie">
        <section className="legal">
            <p>Copyright © 2023 Mate-Ar S.R.L.</p>
        </section>
        <section className="legal">
            <p><a href="/">Política de privacidad</a></p>
            </section>
        <section className="legal">
            <p><a href="/">Términos y condiciones</a></p>
        </section>
    </section>
				
			</footer>

        </React.Fragment>
    )
}
export default Footer;