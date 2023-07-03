import React from 'react';

import '../assets/css/matearInfo.css'
import matear from '../assets/images/1684859897140_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function MatearInfo() {
    return (
        <div>
            <section className="info">
                <img src={matear} alt="banner-matear" className="matear2022"/>
                    <section className="info-texto">
                        <h3>Matear Argentina 2022 </h3>
                        <p>
                            ¿Que es matear Argentina?
                                MATEAR es una feria temática que muestra lo mejor de nuestro producto, profundizando el vínculo
                                que los argentinos tenemos con el mate, proponiendo un espacio de intercambio con el sector
                                gastronómico, comercial, cultural y con los consumidores finales. 
                                    Para mas informacion puede ingresar a la pagina principal de matear: https://matear.com.ar/ o
                                    directamente a la pagina de los organizadores del evento: https://inym.org.ar/feria-matear.html
                                </p>
                                <section className="folleto">
                                    <FontAwesomeIcon icon={ faFilePdf } className='iconfile'/>
                                    <a href="images/folleto-matear.png" download="Matear-2023" className="text-folleto">Folleto feria matear 2023</a>
                                </section>
                            </section>
                    </section>
                </div>
    )
}
export default MatearInfo;