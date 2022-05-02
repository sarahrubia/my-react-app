import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from './components/PrimeiroComponente'
import {CompA, CompB} from './components/SegundoComponente'

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <CompA valor="1" />
    <CompB valor="2" />
  </div>
  // <PrimeiroComponente valor="olá" nome="Newtab"/>
  , elemento)