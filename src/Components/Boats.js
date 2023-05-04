import React, {} from "react";
import { useNavigate } from 'react-router-dom'
import "../CSS/Boats.css"


const Boats = (props) => {

  const navigate = useNavigate()

  function boatClick(e,id){
  navigate(`/boat/${id}`,props)
  }

  return (
    <content> 
      <div className="content--class" onClick={e =>boatClick(e,props.item.id)}><h1>{props.item.name}</h1></div>
      <img src={props.item.image} className="content--img" alt="boat_image" height="220" width="200" onClick={e =>boatClick(e,props.item.id)}/>
      <hr></hr>
      <p className="content--description">{props.item.description}</p>
    </content>
  )
}

export default Boats
