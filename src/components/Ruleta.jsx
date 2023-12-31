import { PiezaRuleta } from './PiezaRuleta'

export const Ruleta = ({rotar, timeDuration, data}) => {
  
  return (
    <div className="ruleta-container">
         <div id="ruleta"
         style={{ transform: `rotate(${rotar}deg)`, transitionDuration :  `${timeDuration}s` , marginBottom : "10px"}}
         >
            {data && data.map((item, index) => <PiezaRuleta key={index} text={item}/> )}
        </div>
    </div>
  )
}
