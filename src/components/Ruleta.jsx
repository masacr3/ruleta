import React from 'react'
import { PiezaRuleta } from './PiezaRuleta'

export const Ruleta = () => {
    const data = [
       "Mati Gato",
       "Leo Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato",
       "Mati Gato"
      ];
  return (
    <div className="ruleta-container">
         <div id="ruleta">
            {data && data.map((item, index) => <PiezaRuleta key={index} text={item}/> )}
        </div>
    </div>
  )
}
