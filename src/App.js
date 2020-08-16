import React from "react";
import HomePage from "../src/pages/Home";
import Services from "../src/pages/Services";
import Projects from "../src/pages/Projects";
import ContactUs from "../src/pages/ContactUs";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import Error from "../src/pages/Error";
import Navbar from "../src/navbar/NavBar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
