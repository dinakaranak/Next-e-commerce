import React from 'react'
import './deals.css'
import product1 from '../images/product-1.jpg'
import product2 from '../images/product-2.jpg'
import product3 from '../images/product-3.jpg'
import product4 from '../images/product-4.jpg'
import product5 from '../images/product-5.jpg'
import product6 from '../images/product-6.jpg'
import product7 from '../images/product-7.jpg'
import product8 from '../images/product-8.jpg'
import product9 from '../images/product-9.jpg'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";


const Deals = () => {
  return (
    <div>
        <div className='dealed'>
            <h1>Deals of the Day</h1>
        </div>
        <div className='top'>

            <a href='#' className='sel'>Top Selling</a>
            <a href='#' className='duct'>Trending Products</a>
            <a href='#' className='rated'>Top Rated</a>
        </div>

   {/* products top selling and price coding */}
        <div className='contain'>
        <div className='houl'>
            <div className='natural'>
            <div className='italian-1'>
                <img src={product1} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>All Natural Italian-style Chicken <br></br>Meatballs <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$73</p>
                </div>
            </div>
            <div className='italian-2'>
                <img src={product4} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Seeds of Change Organic <br></br>Quinoa, Brown <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$238.85</p>
                </div>
            </div>
            <div className='italian-3'>
                <img src={product6} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Seeds of Change organic <br></br>Quinoa, Brown <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$73</p>
                </div>
            </div>
            </div>
        </div>
        <div className='houl'>
            <div className='natural'>
            <div className='italian-1'>
                <img src={product2} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Seeds of Change Organic <br></br>Quinoa, Brown <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$238.85</p>
                </div>
            </div>
            <div className='italian-2-1'>
                <img src={product5} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Angie's Boomchickapop Sweet <br></br>& Salty<br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$35</p>
                </div>
            </div>
            <div className='italian-3-1'>
                <img src={product8} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Foster Farms Takeout Crispy <br></br>Classic <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$55</p>
                </div>
            </div>
            </div>
        </div>
        <div className='houl'>
            <div className='natural'>
            <div className='italian-1'>
                <img src={product3} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>All Natural Italian-style Chicken <br></br>Meatballs <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$78</p>
                </div>
            </div>
            <div className='italian-2-2'>
                <img src={product7} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Canada Dry Ginger Ale-2 L <br></br>Bottle <br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$98</p>
                </div>
            </div>
            <div className='italian-3-2'>
                <img src={product9} className='prod-1'></img>
                <div className='ital'>
                    <p  className='chick'>Haagen-Dazs Caramel Cone Ice <br></br>Cream<br></br>
                    <span className='star'>
                    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarHalf /></span>
                    <span className='a4'> (4.0)</span> </p>
                    <p className='a7'>$67</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Deals