import { useState } from "react";
import React, { useRef } from 'react';

function App() {
  const [potencia,setPotencia] = useState(0)
  const [rotacion,setRotacion] = useState(0)
  const [premio,setPremio] = useState("Arrastra la ruleta para ganar")
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [tiradas,setTiradas] = useState(1)

  const [vdedo,setVdedos] = useState(0) //console log
  const [startTime, setStartTime] = useState(null); //console log
  const [endTime, setEndTime] = useState(null); //console log

  const lanzar = () => {
    const numeroRandom = Math.floor(Math.random() * 101);
    setPotencia(numeroRandom)
    girar()
  }

  const girar = () => {
    const numeroRandom = Math.floor(Math.random() * 10);
    setRotacion(rotacion + (potencia * 5) + numeroRandom )
  }
  const final = () => {
    if (tiradas > 0){
      return
    }

    const grados = (rotacion % 360 + 360) % 360
    if (grados>=0 && grados<=44  || grados >= 136 && grados <= 179 || grados >= 225 && grados <= 269){
      setPremio("Ganaste una Coca-Cola!")
      //Habilitar animacion
    }
    if(grados>=45 && grados<=90 || grados>=270 && grados <= 314){
      setPremio("Intentalo otra vez!")
      setTiradas(1)
    }
    if(grados>=91 && grados <=135 || grados >= 180 && grados <= 224 || grados >= 315 && grados <= 360){
      setPremio("Segui participando!")
    }
    // Una vez que termina de tirar se verifica si puede seguir tirando o no
    verificarDrag()
  }

  const verificarDrag = () => {
    if (tiradas === 0){
      setDragging(false)
    } else{ 
      setDragging(true)
    }
  }


  //---------------------------------------------------------
  //------------- Arraste la ruleta -------------------------
  //---------------------------------------------------------
  const handleTouchStart = (e) => {
    setDragging(true)
    setStartX(e.touches[0].clientX)
    setStartTime(Date.now());
    
  }
  const handleTouchMove = (e) => {
    if (dragging && tiradas > 0  ) {
      const deltaX = e.touches[0].clientX - startX
      setVdedos(deltaX) //console log
      setPotencia(potencia + Math.abs(deltaX))
      setRotacion(rotacion + deltaX * 2)
      setStartX(e.touches[0].clientX)
      
      // Reinicia la potencia a 0 después de 1 segundo
      setTimeout(() => {
        setPotencia(0);
      },500);
      }
      verificarPotencia()
  }

  const handleTouchEnd = () => {
    setDragging(false)
    setPotencia(0)
  }
  
  const verificarPotencia = () => {
    if (potencia > 100){
      girar()
      setTiradas(0)
      
    }
  }
  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita que se muestre el menú contextual
  }
  return (
    <>
      <div
        className="container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="ruleta">
          <img
            src="./assets/ruletaa.png"
            alt="ruleta"
            style={{
              transform: `rotate(${rotacion}deg)`,
              transition: "transform 6s cubic-bezier(0.2,0.8,0.7,0.99)",
            }}
            onContextMenu={handleContextMenu}
            onTransitionEnd={final}
          />
        </div>
        <button onClick={lanzar}>Lanzar</button>
        <div className="premio">{premio}</div>
        <div className="premio"> velocidad dedo {vdedo}</div> 
        <div className="premio"> Potencia {potencia}</div> 
        <div className="central">
          <img src="./assets/central.png" alt="selector" />
        </div>
      </div>
    </>
  )
}

export default App;


