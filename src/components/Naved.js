import React from 'react'
import './naved.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../images/logo1.svg'
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineHeadset } from "react-icons/md";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";

const Naved = () => {
  return (
    <div>
        <Navbar className='terray'>
      <Container>
        <Navbar.Brand href="#" className='vb'>
            <img src={logo1} className='im'></img>
        </Navbar.Brand>
        <InputGroup className=" bb2 abc">
        <DropdownButton
          variant="light"
          title={
            <span className='catte'>
              All Cattegories 
            </span>
          }
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" placeholder='Search.....' /><CiSearch className='ci'/>
      </InputGroup>
              
      
      </Container>
      <div className='iv'>
       <p> <FaCodeCompare className='ic' /> Compare</p>
        <p><FaRegHeart className='ic'/> Wishlist</p>
        <p><FaShoppingCart className='ic' /> Cart</p>
        <p><IoIosContact className='ic'/>Compare</p>
        </div>
      <RxHamburgerMenu className='ham'/>
    </Navbar>

    <div className='ter'>
      <img src={logo1} className='loged'></img>
      <RxHamburgerMenu className='hamed'/>


    </div>
    {/* second navbar */}
     <nav>        
     <div className="d-flex gap-2 mb-2 abc">
      <div>
        <Button variant="success" className='siz'>
          <p>All Categories</p>
        </Button></div>
        <div className='a'>
        <Nav.Link href="#action1" className='aa'>Deals</Nav.Link>
        <button className='but'><NavDropdown title={
        <span>
          Mega Deals <IoIosArrowDown style={{ marginLeft: '5px' }} />
        </span>
      }
    
    id="navbarScrollingDropdown" className='aa-1'>
    
              <NavDropdown.Item href="#action3">Deals</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              About
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Vendors</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Mega Menu</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Pages</NavDropdown.Item>
            </NavDropdown></button>


    <NavDropdown title={
        <span>
          Link <IoIosArrowDown  />
        </span>
      }
    
    id="navbarScrollingDropdown" className='aa'>

              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>



            <Nav.Link href="#action1" className='aa'>About</Nav.Link>
            <NavDropdown title={
        <span>
          Shop <IoIosArrowDown  />
        </span>
      } id="navbarScrollingDropdown" className='aa'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={
        <span>
          Vendors <IoIosArrowDown  />
        </span>
      } id="navbarScrollingDropdown" className='aa'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={
        <span>
          Mega Menu <IoIosArrowDown  />
        </span>
      } id="navbarScrollingDropdown" className='aa'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={
        <span>
          Blog <IoIosArrowDown  />
        </span>
      } id="navbarScrollingDropdown" className='aa'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={
        <span>
          Pages <IoIosArrowDown  />
        </span>
      } id="navbarScrollingDropdown" className='aa'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </div>
        <MdOutlineHeadset className='ead' />
        <p className='h0'>9000-888<p>24/7 support center</p></p>

 
      </div>    
     </nav>
    </div>
  )
}

export default Naved