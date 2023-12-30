import { useState } from "react";
import React, { useRef } from 'react';
import { Ruleta } from "./components/Ruleta";
import { Selector } from "./components/Selector";

function App() {
  const lanzador = () => console.log("Estoy girando la ruelta")
  
  return (
    <div className="app-container">
      <Selector/>
      <Ruleta/> 
      <h1> Ruleta </h1>
      <button onClick={lanzador}>Lanzar</button>
    </div>
  )
}

export default App;


