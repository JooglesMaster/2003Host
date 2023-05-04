import React, { useState, useEffect } from 'react'
import "../CSS/Vendor.css"
import Button from 'react-bootstrap/Button';
import Choice from "../Components/Choice"
import { useNavigate } from 'react-router-dom'


const User = () => {
    const navigate = useNavigate()
    const[choice, setChoice] = useState([
        {
            "id": 1,
            "name": "Fishing",
            "selected": false
        },
        {
            "id": 2,
            "name": "Sailing",
            "selected": false
        },
        {
            "id": 3,
            "name": "Camping",
            "selected": false    
        },
        {
            "id": 4,
            "name": "Kayaking",
            "selected": false
        },
        {
            "id": 5,
            "name": "Paddleboarding",
            "selected": false
        },

        {
            "id": 6,
            "name": "<5",
            "selected": false
        },
    
        {
            "id": 7,
            "name": "5-10",
            "selected": false
        },
        {
            "id": 8,
            "name": ">15",
            "selected": false,
        },
        {
            "id": 9,
            "name": "No Experience",
            "selected": false,
        },
        {
            "id": 10,
            "name": "Beginner",
            "selected": false,
        },
        {
            "id": 11,
            "name": "Intermediate",
            "selected": false,
        },
        {
            "id": 12,
            "name": "Expert",
            "selected": false,
        },
])




    const[next,setNext] = useState(1)


    function mapByIdRange(startId, endId) {
        var filteredArr = choice.filter(function(item) {
          return item.id >= startId && item.id <= endId;
        });
      
        var mappedArr = filteredArr.map(function(item) {
          return item
        });
      
        return mappedArr;
    }



    const PageOne= ()=>{

        const map1 = mapByIdRange(1,5)
        const map2 = mapByIdRange(6,8)

        console.log(map1)
 
        const buttonElements1 = map1.map(item =>{
            console.log(item)
            return(
                <Choice
                key={item.id}
                item={item}
                toggle={Toggle}
                />
            )
            
        })

        const buttonElements2 = map2.map(item =>{
            return(
                <Choice
                key={item.id}
                item={item}
                toggle={Toggle}
                />
            )
            
        })

        return(
            <>
                <div className="vendor-text">
                    <h2>{"What boat related activites are you interested in?"}</h2>
                </div>
                    <div className="vendor-buttons">
                        {buttonElements1}
                    </div>
                <div className="vendor-text">
                    <h2>{"How many people would be on the boat?"}</h2>
                </div>
                    <div className="vendor-buttons">
                        {buttonElements2}
                </div>

            </>
        )
    }

    const PageTwo= ()=>{

        const map1 = mapByIdRange(8,12)

        console.log(map1)
 
        const buttonElements1 = map1.map(item =>{
            console.log(item)
            return(
                <Choice
                key={item.id}
                item={item}
                toggle={Toggle}
                />
            )
            
        })

        return(
            <>
                <div className="vendor-text">
                    <h2>{"What's your experience level with boats?"}</h2>
                </div>
                    <div className="vendor-buttons">
                        {buttonElements1}
                    </div>                
            </>
        )
    }
    const PageThree= ()=>{
        

        const selectedChoice = choice.map((choice)=>{
            if(choice.selected ===true){
                return(
                    <h2>{choice.name}</h2>
                )
            }

        })

        return(
            <>
                <div className="vendor-text">
                    <div className="vendor-title">
                        <h1>Make sure the details are correct!</h1>
                    </div>
                    <div className="vendor-title">
                        <h1>User details:</h1>
                    </div>
                    {selectedChoice}

                </div>
            </>
        )
    }


    function Toggle(id){
        setChoice(prevChoice=>{
            return prevChoice.map((choice)=>{
                return(
                    choice.id === id? {...choice, selected: !choice.selected} :choice
                )
            })
        })
    }


    return (
        <>
            <div className="vendor-container">
                <div className="vendor-title">
                    <h1>Dskafos Users</h1>
                </div>
                {next===1?<PageOne/>:''}
                {next===2?<PageTwo/>:''}
                {next===3?<PageThree/>:''}
                <div className="vendor-continue">
                    <Button variant='warning' onClick={()=>{if(next >= 2 && next <= 3){setNext(next-1)}}}>
                        Back
                    </Button>
                    <Button variant='warning' onClick={()=>{if(next > 0 && next < 3){setNext(next+1)}if(next === 3) navigate(`/boat/1`)}}>
                        Continue
                    </Button>
                </div>
            </div>
        </>
    )
}

export default User;