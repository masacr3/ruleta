import React from 'react'

function Menu({registros}) {
  return (
    <div>
       { registros.map( (item, index) => 
            <div
                key={index}
                style={{width : '300px', display: 'flex', flexDirection : 'column', alignItems: 'center', marginBottom : '10px'}}
            >
                <div
                    className='font-gaming'
                >
                    {index} - {item}
                </div>
            </div>
        )
        }
    </div>
  )
}

export default Menu