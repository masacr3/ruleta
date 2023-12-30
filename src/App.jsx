import { useState } from "react";
import React, { useRef } from 'react';

function App() {
  const [potencia,setPotencia] = useState(2)
  const [rotacion,setRotacion] = useState(0)
  const [premio,setPremio] = useState("Arrastra la ruleta para ganar")
  const lanzar = () => {
    const numeroRandom = Math.floor(Math.random() * 101);
    setPotencia(numeroRandom)
    girar()
  }

  const girar = () => {
    const nuevaRotacion=Math.floor(Math.random()*100)+340
    setRotacion(rotacion + potencia + nuevaRotacion)
  }

  const final = () => {
    const grados = (rotacion % 360 + 360) % 360
    if (grados>=0 && grados<=44  || grados >= 136 && grados <= 179 || grados >= 274 && grados <= 314){
      setPremio("Ganaste una Coca-Cola!")
    }
    if(grados>=45 && grados<=90 || grados>=225 && grados <= 269){
      setPremio("Intentalo otra vez!")
    }
    if(grados>=91 && grados <=135 || grados >= 225 && grados <= 269 || grados >= 315 && grados <= 360){
      setPremio("Segui participando!")
    }
  }
  
  return (
    <>
      <div className="container">
        <div className="ruleta">
        <img src="./assets/ruletaa.png" alt="ruleta" 
        style={{
        transform:`rotate(${rotacion}deg)`,
        transition:"transform 6s cubic-bezier(0.2,0.8,0.7,0.99)",
        }}
        onTransitionEnd={final}
        /> 
        </div>
        <button onClick={lanzar}>Lanzar</button>
        <div>
          <h1>Gire la ruleta</h1>
        </div>
        <div className="premio">{premio}</div> 
        <div className="central">
          <img src="./assets/central.png" alt="selector"/> 
        </div>
          
        </div>

        
    </>
  )
}

export default App;
