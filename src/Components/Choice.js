import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';




const Choice = (props) => {


    return (
        <>
            <Button key={props.item.id} onClick={()=>props.toggle(props.item.id)} variant={props.item.selected?'danger':"btn btn-outline-danger"}>
            {props.item.name}
            </Button>
        </>
    )
}

export default Choice;