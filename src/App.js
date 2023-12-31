import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import CardDetail from "./Components/CardDetail/CardDetail";
import Create from "./Components/Create/Create";
import axios from "axios";
axios.defaults.baseURL = "https://foodapp-backend-ops7.onrender.com";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={CardDetail} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
