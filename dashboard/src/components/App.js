import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Header";
import Home from "./Home";
import ListProducts from "./ListProducts";
import Login from "./Login";
import Registro from "./Registro";
import Footer from "./Footer";
import Error404 from './Error404'

function App() {
  return (
    <React.Fragment>
      <div style={{ background: '#E5D9B6' }}>
        <NavBar />

        <BrowserRouter>
        <Switch>

          <Route exact={true} path="/"> <Home/> </Route>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/registro" exact={true} component={Registro} />
          <Route path="/catalogo" exact={true} component={ListProducts} />
          <Route exact={true} component={Error404}/>

        </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;