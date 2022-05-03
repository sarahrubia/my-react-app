import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
// import PrimeiroComponente from './components/PrimeiroComponente'
// import {CompA, CompB} from './components/SegundoComponente'
// import Time from './components/TimesComponentes'
// import ComponenteFuncao from './components/ComponenteFuncao'
// import ComponenteClasse from "./components/ComponenteClasse";
// import Contador from './components/Contador'
// import Hook from './components/Hook'
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<About/>} />
      </Routes>
    </BrowserRouter>

      {/*
      <Home />
      <About /> 
      <Hook /> 
      <Contador numero={50}/>
      <ComponenteClasse valor="Que massa!"/>
      <ComponenteFuncao />
      <Time />
      <div>
        <CompA valor="1" />
        <CompB valor="2" />
      </div>
      <PrimeiroComponente valor="olá" nome="Newtab"/> */}
  </React.StrictMode>

)