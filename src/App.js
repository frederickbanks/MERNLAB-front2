import React from "react";
import "./App.css";
import Pokemon from "./pokemon.js";
import { Route, Link, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon</h1>
        <nav>
          <span>
          <Link to="/" >
            <h2>Home</h2>
            </Link>
          </span>
        
          

        </nav>
      </header>
    </div>
  );
}

export default App;
