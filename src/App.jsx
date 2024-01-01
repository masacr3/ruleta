import { useEffect, useState } from "react";
import { Ruleta } from "./components/Ruleta";
import { Selector } from "./components/Selector";
import Menu from "./components/Menu";

function App() {
  
  const shuffle = (array) =>{
    for (let i=array.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i],array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const [rotar, setRotar] = useState(0)
  const [timeAnimation, setTimeAnimation] = useState(0)
  const [data, setData] = useState(shuffle(["1","2","3","4","5","6"]))
  const [opciones, setOpciones] = useState(["Coca-cola","Nada","Dalee gato","Don satur","Casii","Una gomita"])
  // const [data, setData] = useState(shuffle(["coca-cola"]))

  useEffect( () =>{
    console.log("el valor actual de data es ",data);
  },[data]);
  
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

  const Reiniciar = () => {
    setRotar(0)
    setData([...shuffle(data)])
    console.log("Reinicio")
  }

  return (
    <div className="app-container">
      <h1
        className="font-gaming"
      >El Carlo</h1>
      <Selector/>
      <Ruleta rotar={rotar} timeDuration={timeAnimation} data={data}/> 
      <Menu registros={opciones}/>
      {rotar == 0 ?
        <button className="bton-gaming" onClick={Lanzar}>LANZAR !</button> 
        :
        <button className="bton-gaming" onClick={Reiniciar}>Reiniciar</button>
      }
      
    </div>
  )
}

export default App;


