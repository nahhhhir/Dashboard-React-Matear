import React from 'react';

import '../assets/css/contectInfo.css'
import TotalS from './TotalS';

function ContentInfo() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div className='resenia-articulo'>

                <div className='box-resenia'>
                    <p class=" titulo-reseña">Estadisticas de la pagina</p>
                    
                    <div id="content">
                        <TotalS />
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentInfo;