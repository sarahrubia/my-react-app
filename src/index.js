import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from './components/PrimeiroComponente'
// import {CompA, CompB} from './components/SegundoComponente'
import Time from './components/TimesComponentes'

const elemento = document.getElementById('root');
ReactDOM.render(
  <Time />
  // <div>
  //   <CompA valor="1" />
  //   <CompB valor="2" />
  // </div>
  // <PrimeiroComponente valor="olá" nome="Newtab"/>
  , elemento)