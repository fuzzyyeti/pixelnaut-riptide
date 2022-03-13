import logo from './logo.svg';
import './App.css';
import {Wallet} from "./Wallet";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img width={'50%'} src={process.env.PUBLIC_URL + '/pixelnaut-logo2.svg'}/>
          <Wallet/>
      </header>

    </div>
  );
}

export default App;
