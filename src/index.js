import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from './components/PrimeiroComponente'
// import {CompA, CompB} from './components/SegundoComponente'
// import Time from './components/TimesComponentes'
// import ComponenteFuncao from './components/ComponenteFuncao'
import ComponenteClasse from "./components/ComponenteClasse";


const elemento = document.getElementById('root');
ReactDOM.render(
  <ComponenteClasse valor="Que massa!"/>
  // <ComponenteFuncao />
  // <Time />
  // <div>
  //   <CompA valor="1" />
  //   <CompB valor="2" />
  // </div>
  // <PrimeiroComponente valor="olá" nome="Newtab"/>
  , elemento)