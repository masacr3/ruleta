import { useState } from "react";
import { Ruleta } from "./components/Ruleta";
import { Selector } from "./components/Selector";

function App() {
  const [rotar, setRotar] = useState(0)
  const [timeAnimation, setTimeAnimation] = useState(0)
  
  const Lanzar = () =>{
    const maxSpin = 10
    const minSpin = 3
    const MaxDegree = 360
    const minDegree = 1

    const getRandom = (min, max) => {
      return Math.random() * (max-min) + min
    }

    const spins = getRandom(minSpin, maxSpin)
    const degree = getRandom(minDegree, MaxDegree)

    const fullSpin = 5 + (spins - 1) * 360
    const spin = fullSpin + degree

    setRotar(spin)
    setTimeAnimation(spins)
  }

  return (
    <div className="app-container">
      <Selector/>
      <Ruleta rotar={rotar} timeDuration={timeAnimation}/> 
      <h1> Ruleta </h1>
      <button onClick={Lanzar}>Lanzar</button>
    </div>
  )
}

export default App;


