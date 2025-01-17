import React from 'react'
import './stay.css'
import banner9 from '../images/banner-9.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoPaperPlaneOutline } from "react-icons/io5";
import icon1 from '../images/icon-1.svg'
import icon2 from '../images/icon-2.svg'
import icon3 from '../images/icon-3.svg'
import icon4 from '../images/icon-4.svg'
import icon5 from '../images/icon-5.svg'
import logo1 from '../images/logo1.svg'

import { MdHeadphones } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BiTimer } from "react-icons/bi";

import app from '../images/app-store.jpg';
import google from '../images/google-play.jpg';
import payment from '../images/payment-method.png';

const Stay = () => {
    return (
        <div className='home'>
            <div className='start'>
                <div className='geter'>
                    <h2 className='faf'>Stay home & get your daily <br></br>needs from our shop</h2>
                    <p className='art'>Start You'r Daily Shopping with <span className='est'> Nest Mart</span></p>
                    <InputGroup className="mb-3 inp">
                        {/* <IoPaperPlaneOutline /> */}

                        <Form.Control

                            className='med'
                            placeholder=" Your email address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" className='addon'>
                            Subscribe
                        </Button>

                    </InputGroup></div>
                <img src={banner9} className='ban'></img>
            </div>
            <div className='sub'>
                <div className='price'>
                    <img src={icon1} className='ico'></img>
                    <div className='rd'>
                        <h5 className='rd-1'>Best prices & offers</h5>
                        <p className='rd-2'>Order $50 or more</p></div>
                </div>
                <div className='price'>
                    <img src={icon2} className='ico'></img>
                    <div className='rd'><h5 className='rd-1'>Free delivery</h5>
                        <p className='rd-2'>24/7 amazing services</p></div>
                </div>
                <div className='price'>
                    <img src={icon3} className='ico'></img>
                    <div className='rd'><h5 className='rd-1'>Great daily deal</h5>
                        <p className='rd-2'>When you sign up</p></div>
                </div>
                <div className='price'>
                    <img src={icon4} className='ico'></img>
                    <div className='rd'><h5 className='rd-1'>Wide assortment</h5>
                        <p className='rd-2'>Mega Discounts</p></div>
                </div>
                <div className='price'>
                    <img src={icon5} className='ico'></img>
                    <div className='rd'><h5 className='rd-1'>Easy returns</h5>
                        <p className='rd-2'>Within 30 days</p></div>
                </div>
            </div>
            <footer>
                <div className='foot'>
                    <div className='some'>
                        <img src={logo1} className='go'></img>
                        <p className='gro'>Awesome grocery store website template</p>
                        <p className='phones'><CiLocationOn className='cation' /> <span className='ress'>Address:</span>
                            v.g.p nagar, kurumapalayam, coimbatore-641107</p>
                        <p className='phones'> <MdHeadphones className='cation' /> <span className='ress'>Call Us:</span> (+91)-9940935315</p>
                        <p className='phones'> <IoPaperPlaneOutline className='cation' /> <span className='ress'>Email</span>
                            dinakaran9940@gmail.com</p>
                        <p className='phones'> <BiTimer className='cation' /> <span className='ress'>Hours:</span>10:00-18:00, Mon-Sat</p>
                    </div>
                    <div className='foot'>
                        <div className='pany'>
                            <h2>Company</h2>
                            <div className='about'>
                                <p>About Us</p>
                                <p>Delivery Information</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                                <p>Contact Us</p>
                                <p>Support Center</p>
                                <p>Careers</p></div>
                        </div>
                        <div className='pany'>
                            <h2>Account</h2>
                            <div className='about'>
                                <p>Sign In</p>
                                <p>View Cart</p>
                                <p>My Wishlist</p>
                                <p>Track My Order</p>
                                <p>Help Ticket</p>
                                <p>Shipping Details</p>
                                <p>Compare products</p>
                            </div>
                        </div>
                        <div className='pany'>
                            <h2>Corporate</h2>
                            <div className='about'>
                                <p>Become a Vendor</p>
                                <p>Affiliate Program</p>
                                <p>Farm Business</p>
                                <p>Farm Careers</p>
                                <p>Our Suppliers</p>
                                <p>Accessibility</p>
                                <p>Promotions</p>
                            </div>
                        </div>
                        <div className='pany'>
                            <h2>Popular</h2>
                            <div className='about'>
                                <p>Milk & Flavoured Milk</p>
                                <p>Butter and margarine</p>
                                <p>Eggs Substitutes</p>
                                <p>Marmalades</p>
                                <p>Sour Cream and Dips</p>
                                <p>Tea & Kombucha</p>
                                <p>Cheese</p>
                            </div>
                        </div>
                    </div>

                    <div className='stall'>
                        <h2>Install App</h2>
                        <p className='or'>From App Store or Google Play</p>
                        <div className='goog'>
                            <img src={app} className='goog-1'></img>
                            <img src={google} className='goog-1'></img>
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img src={payment} className='cur'></img>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Stay