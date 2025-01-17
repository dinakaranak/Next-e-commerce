import React from 'react'
import './slide.css'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slider-1.png'
import slide2 from '../images/slider-2.png'
import Nav from 'react-bootstrap/Nav';

const Slide = () => {
  return (
    <div>

      <div className='ab'>
        <Carousel >
      <Carousel.Item type='radio' >
      <img src={slide1} className='im-1'></img>
        <Carousel.Caption className='tex-1'>

          <h3>Don't miss amazing <br></br> grocery deals</h3>
          <p>Sign up for the daily newsletter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} className='im-2'></img>
        <Carousel.Caption className='tex-2'>
          <h3>Fresh vegtables <br></br> big discount</h3>
          <p>Save up to 50% off on your first order</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <div>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    > 
    <Nav.Item className='feat'>
        
          Featured Categories      
      </Nav.Item>
      <div className='di'>
      <Nav.Item className='lin'>
        <Nav.Link href="link" className='lin-1'>Cake & Milk</Nav.Link>
      </Nav.Item>
      <Nav.Item className='lin'>
        <Nav.Link eventKey="link-1" className='lin-1'>Coffee & Tea</Nav.Link>
      </Nav.Item>
      <Nav.Item className='lin'>
        <Nav.Link eventKey="link-2" className='lin-1'>Pet Food</Nav.Link>
      </Nav.Item>
      <Nav.Item className='lin'>
        <Nav.Link href="link" className='lin-1'>Vegtables</Nav.Link>
      </Nav.Item>
      </div>
      
    </Nav>

    </div>
    </div>
  )
}

export default Slide