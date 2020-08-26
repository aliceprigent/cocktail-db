import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home"
import CocktailsByName from "./Components/CocktailsByName"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/cocktails" component={CocktailsByName} />
     </Switch>
     </BrowserRouter>

    </div>
  ); 
}

export default App;
