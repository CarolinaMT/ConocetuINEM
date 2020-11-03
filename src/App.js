import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Comenzar from "./components/pages/Comenzar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dondeteencuentras from "./components/pages/Dondeteencuentras";
import Instrucciones from "./components/pages/Instrucciones";
import ContactUs from "./components/pages/ContactUs";
import Bloques from "./components/pages/Bloques";
import Bloquesmasbuscados from "./components/pages/Bloquesmasbuscados";
import Card from "./components/Card";
import Elegir1 from "./components/Elegir1";
import Elegir from "./components/pages/Elegir";
import Rutas from "./components/Rutas";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Comenzar} />
        <Route path="/Dondeteencuentras" component={Dondeteencuentras} />
        <Route path="/Instrucciones" component={Instrucciones} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/Bloques" component={Bloques} />
        <Route path="/Bloquesmasbuscados" component={Bloquesmasbuscados} />
        <Route path="/Card" component={Card} />        
        <Route path="/Elegir1" component={Elegir1} />
        <Route path="/Elegir" component={Elegir} />
        <Route path="/Rutas" component={Rutas} />
      </Switch>
    </Router>
  );
}

export default App;
