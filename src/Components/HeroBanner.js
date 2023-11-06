import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


function HeroBanner() {
  return (
    <div className=''>
        {/* home */}
        <Container>
            <Row>
                <Col className='text-center'><h1 className='text-danger ' style={{
            fontWeight:'600',
            fontSize:'45px',
            marginTop:'100px'
        }}>Fitness Club</h1>
        <p className='' style={{
            fontSize:'75px', 
            fontWeight:800
        }}>Sweat Smile <br /> And Repeat</p>
        <p style={{
            fontSize:'25px'
        }}>Check out the most effective exercises</p>
        <Button variant='danger' href='#exercises' className='m-2'>Explore Exercises</Button>
        </Col>
                <Col className='text-center'>
                <img 
                className='mt-2 hero-banner-img' 
                style={{borderRadius:'0px 0px 0px 90px'}}
                src="https://i.postimg.cc/kgXc06qW/istockphoto-1216992831-612x612.jpg" alt="" /></Col>
            </Row>
        </Container>

        {/*  */}
    </div>
  )
}

export default HeroBanner