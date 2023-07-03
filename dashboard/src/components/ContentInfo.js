import React from 'react';

import '../assets/css/contectInfo.css'
import TotalS from './TotalS';

function ContentInfo() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div className='resenia-articulo'>

                <div className='box-resenia'>
                    <p class=" titulo-reseña">¿Quienes somos?</p>
                    <p class="reseña-home">
                        Mate Ar es una empresa Argentina con el objetivo de querer ayudar a los distintos Argentinos del mundo a poder conseguir un matecito de forma
                        rapida y segura, si no si sos extranjero tambien tenemos todo lo necesario para vos y toda tu familia a un precio bastante economico.
                        Todos nuestros productos son artesanales provenientes de distintas partes de nuestro paìs, como seria el caso de nuestras bolsas materas
                        de cuero de guanaco proveniente de la patagonia, o los mates decorativos hechos de las salinas de Jujuy.</p>

                    <div id="content">
                        <TotalS />
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentInfo;