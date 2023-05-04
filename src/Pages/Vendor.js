import React, { useState, useEffect,useRef } from 'react'
import "../CSS/Vendor.css"
import Button from 'react-bootstrap/Button';
import Choice from "../Components/Choice"
import VendorData from "../vendor-data-copy"
import { useNavigate } from 'react-router-dom'

const Vendor = () => {

    const [choice, setChoice] = useState(VendorData.user.choice)
    const [company, setCompany] = useState(VendorData.user.company)
    const [next, setNext] = useState(1)
    const [name, setName] = useState('')
    const navigate = useNavigate()



    const buttonElements = choice.map(item => {
        return (
            <Choice
                key={item.id}
                item={item}
                toggle={Toggle}
            />
        )

    })

    const PageOne = () => {
        return (
            <>
                <div className="vendor-text">
                    <h2>{"Select what boat related services do you offer"}</h2>
                </div>
                <div className="vendor-buttons">
                    {buttonElements}
                </div>
            </>
        )
    }
    const PageTwo = ({ name, setName, company, toggleCompany }) => {
        const inputRef = useRef();
      
        const handleChange = (event) => {
          setName(event.target.value);
        };
      
        useEffect(() => {
          if (company[1].selected) {
            inputRef.current.focus();
          }
        }, [name]);
      
        return (
          <>
            <div className="vendor-text">
              <h2>{"Are you individual contractor or do you represent a company?"}</h2>
            </div>
            <div className="vendor-buttons">
              <Button onClick={() => toggleCompany(company[0].id)} variant={company[0].selected ? 'danger' : " btn-outline-danger"}>
                I work alone
              </Button>
              <Button onClick={() => toggleCompany(company[1].id)} variant={company[1].selected ? 'danger' : " btn-outline-danger"}>
                As a company
              </Button>
              <div className='vendor-form' style={{ display: company[1].selected ? 'block' : 'none' }}>
                <div className="vendor-text">
                  <h2>{"If you represent a company, please input the name below"}</h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    ref={inputRef}
                    type='text'
                    value={name}
                    onChange={handleChange}
                    placeholder='Please enter your name'
                    style={{ padding: '5px 15px', width: 400, fontSize: 17 }}
                  />
                </form>
              </div>
            </div>
          </>
        );
    }       
    const PageThree = ({ choice, company, name }) => {
        const selectedChoice = choice.map((choice) => {
          if (choice.selected === true) {
            return (
              <h2 key={choice.id}>{choice.name}</h2>
            )
          }
          return null;
        });
      
        return (
          <>
            <div className="vendor-text">
              <h1>Make sure the details are correct!</h1>
              {company[1].selected && <h2>Company Name: {name}</h2>}
              {company[0].selected && <h2>I work Independently</h2>}
              <div className="vendor-title">
                <h1>I provide these services</h1>
              </div>
              {selectedChoice}
              <div className="vendor-title">
              </div>
            </div>
          </>
        );
      }

    function Toggle(id) {
        setChoice(prevChoice => {
            return prevChoice.map((choice) => {
                return (
                    choice.id === id ? { ...choice, selected: !choice.selected } : choice
                )
            })
        })
    }

    function toggleCompany(id) {
        setCompany(prevCompany => {
            return prevCompany.map((company) => {
                if (company.id === id) {
                    return ({ ...company, selected: !company.selected });
                } else {
                    return ({ ...company, selected: false });
                }
            });
        });
    }


    return (
        <>
            <div className="vendor-container">
                <div className="vendor-title">
                    <h1>Dskafos Vendors</h1>
                </div>
                {next === 1 ? <PageOne /> : ''}
                {next === 2 ? <PageTwo name={name} setName={setName} company={company} toggleCompany={toggleCompany} /> : ''}
                {next === 3 ? <PageThree choice={choice} company={company} name={name} /> : ''}
                <div className="vendor-continue">
                    <Button variant='warning' onClick={() => { if (next >= 2 && next <= 3) { setNext(next - 1) } }}>
                        Back
                    </Button>
                    <Button variant='warning' onClick={() => { if (next > 0 && next < 3) { setNext(next + 1) } if(next === 3) navigate(`/dashboard/`)}}>
                        Continue
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Vendor;