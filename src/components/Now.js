import React from 'react'
import './select.css'
import banner1 from '../images/banner-1.png'
import banner2 from '../images/banner-2.png'
import banner3 from '../images/banner-3.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight } from "react-icons/fa";

const Now = () => {
  return (
    <div>
  <Container fluid className='con'>
      <Row className='ow'>
        <Col className='ow-1' >
        <div className='ba-1'>
          <img src={banner1} md={12} lg={4} className='bad-1'></img>
          <h3 className='ver-1'>Everyday Fresh & <br></br>Clean with Our <br></br> Products</h3>
          <button className='op-1'>Shop Now <FaArrowRight /></button>
        </div>
        </Col>
        <Col className='ow-2'>
        <div className='ba-2'>
          <img src={banner2} md={12} lg={4} className='bad-2'></img>
          <h3 className='ver-2'>Make your Breakfast <br></br>Healthy and Easy</h3>
          <button className='op-2'> Shop Now <FaArrowRight /></button>
        </div>
        </Col>
        <Col className='ow-3'>
        <div className='ba-3'>
          <img src={banner3} md={12} lg={4} className='bad-3'></img>
          <h3 className='ver-3'>The best Organic <br></br>Products Online</h3>
          <button className='op-3'>Shop Now <FaArrowRight /></button>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Now