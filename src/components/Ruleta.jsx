import { PiezaRuleta } from './PiezaRuleta'

export const Ruleta = ({rotar, timeDuration}) => {
    const data = [
       "Nada",
       "Nada",
       "Coca-cola",
       "nada",
       "Don satur",
       "nada",
       "alfajaor",
       "nada",
       "nada",
       "otra oportunidad",
       "Coca cola",
       "Mati Gato"
      ];
  return (
    <div className="ruleta-container">
         <div id="ruleta"
         style={{ transform: `rotate(${rotar}deg)`, transitionDuration :  `${timeDuration}s` }}
         >
            {data && data.map((item, index) => <PiezaRuleta key={index} text={item}/> )}
        </div>
    </div>
  )
}
