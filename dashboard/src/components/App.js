import React from "react";

import NavBar from "./Header";
import ContentInfo from "./ContentInfo";
import DetailUltimo from './DetailUltimo';
import MatearInfo from "./MatearInfo";
import ListProducts from "./ListProducts";
import Login from "./Login";
import Registro from "./Registro";
import Footer from "./Footer";

function App() {
  return (
    <div style={{background: '#E5D9B6'}}>
        <NavBar/>
        <ContentInfo/>
        <DetailUltimo/>
        <MatearInfo/>
        <Footer/>
        <Registro/>
    </div>
  );
}

export default App;