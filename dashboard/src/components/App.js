import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import ListProducts from "./ListProducts";
import DetalleProducto from "./DetalleProducto";
import Editar from "./Editar";
import Footer from "./Footer";
import Error404 from './Error404'
import Create from "./Create";
import ListUser from "./ListUser";
import DetalleUser from "./DetalleUser";

function App() {
  return (
    <React.Fragment>
      <div style={{ background: '#E5D9B6' }}>
        <Header />

        <Switch>

          <Route exact={true} path="/"> <Home/> </Route>
          <Route path="/crear" exact={true} component={Create} />
          <Route path="/editar" exact={true} component={Editar} />

          <Route path='/listuser' exact={true} component={ListUser} />
          <Route path='/listuser/:id' exact={true} component={DetalleUser} />
          <Route path="/productos" exact={true} component={ListProducts} />
          <Route path="/productos/:id" exact={true} component={DetalleProducto} />
          
          <Route exact={true} component={Error404}/>

        </Switch>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
