import React from "react";

import ContentInfo from "./ContentInfo";
import DetailUltimo from './DetailUltimo';
import MatearInfo from "./MatearInfo";

function Home() {
    return (
        <React.Fragment>
            <ContentInfo />
            <DetailUltimo />
            <MatearInfo />
        </React.Fragment>
    );
}

export default Home;