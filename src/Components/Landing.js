import React, { } from "react";
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import NavBar from "./LandingNav"
import "../CSS/Landing.css"
import { Col, Container, Row } from "react-bootstrap";


const Landing = () => {

  const navigate = useNavigate()
  console.log("Index component rendered");

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <div className='hero-bg'>
        <NavBar />
        <Container fluid="md" className='hero-text'>
          <Row>
            <Col sm="12">
              <span>Welcome to</span>
              <span className='strip'></span>
              <h3>DSKAFOS</h3>
              <Link to='/usertype' className="link-text">
                <Button
                  className='hero-btn'
                  variant='danger'>
                  Continue
                </Button>
              </Link>
            </Col>

          </Row>

        </Container>


      </div>
    </ThemeProvider>
  )
}

export default Landing