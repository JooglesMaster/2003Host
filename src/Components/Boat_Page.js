import React from 'react'
import Boats from './Boats'
import rawData from "../mock-data.json"


export default function Boat (){


    
    const mapBoat = rawData.map(item =>{
        return(
            <Boats
            key={item.id}
            item={item}
            />
        )
      
      })

  return (
    <div className="nonflex">
        <div className='parent'>
        {mapBoat}
        </div>
    </div>
  )
}
