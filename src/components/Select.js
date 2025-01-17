import React from 'react'
import './select.css'
import cat1 from '../images/cat-13.png'
import cat2 from '../images/cat-12.png'
import cat3 from '../images/cat-11.png'
import cat4 from '../images/cat-9.png'
import cat5 from '../images/cat-3.png'
import cat6 from '../images/cat-1.png'
import cat7 from '../images/cat-2.png'
import cat8 from '../images/cat-4.png'
import cat9 from '../images/cat-5.png'
import cat10 from '../images/cat-14.png'

const Select = () => {
  return (
    <div>
      <div className='vi' >
        <div className='ol-1 '>
          <div className='oll1'>
            <img src={cat1} className='i-1'></img>

          </div>
          <h5>Cake & Milk</h5>
          <p>26 items</p>
        </div>

        <div className='ol-2' >
          <div className='oll2'>
            <img src={cat2} className='i-1'></img>
          </div>

          <h5>Ogranic Kiwi</h5>
          <p>26 items</p>
        </div>
        <div className='ol-3'>
          <div className='oll3'>
            <img src={cat3} className='i-1'></img>
          </div>

          <h5>Peach</h5>
          <p>26 items</p>
        </div>
        <div className='ol-4'>
          <div className='oll4'>
            <img src={cat4} className='i-1'></img>
          </div>

          <h5>Apples</h5>
          <p>35 items</p>
        </div>
        <div className='ol-5'  >
          <div className='oll5'>
            <img src={cat5} className='i-1'></img>
          </div>

          <h5>Snack</h5>
          <p>54 items</p>
        </div>
        <div className='ol-6' >
          <div className='oll6'>
            <img src={cat6} className='i-1'></img>
          </div>

          <h5>Vegtables</h5>
          <p>76 items</p>
        </div>
        <div className='ol-7'>
          <div className='oll7'>
            <img src={cat7} className='i-1'></img>
          </div>

          <h5>Strawberry</h5>
          <p>124 items</p>
        </div>
        <div className='ol-8' >
          <div className='oll8'>
            <img src={cat8} className='i-1'></img>
          </div>

          <h5>Black Plums</h5>
          <p>98 items</p>
        </div>
        <div className='ol-9' >
          <div className='oll9'>
            <img src={cat9} className='i-1'></img>
          </div>

          <h5>Custard Apple</h5>
          <p>58 items</p>
        </div>
        <div className='ol-10' >
          <div className='oll10'>
            <img src={cat10} className='i-1'></img>
          </div>

          <h5>Coffee & Tea</h5>
          <p>75 items</p>
        </div>
      </div>
      {/* media screen mobile only */}
      <div className='vi ki'>
        <div className='ol-1 '>
          <div className='oll1'>
            <img src={cat1} className='i-1'></img>

          </div>
          <h5>Cake & Milk</h5>
          <p>26 items</p>
        </div>

        <div className='ol-2' >
          <div className='oll2'>
            <img src={cat2} className='i-1'></img>
          </div>

          <h5>Ogranic Kiwi</h5>
          <p>26 items</p>
        </div>
        <div className='ol-3'>
          <div className='oll3'>
            <img src={cat3} className='i-1'></img>
          </div>

          <h5>Peach</h5>
          <p>26 items</p>
        </div>
        <div className='ol-4'>
          <div className='oll4'>
            <img src={cat4} className='i-1'></img>
          </div>

          <h5>Apples</h5>
          <p>35 items</p>
        </div>
      </div>


      {/* tab screen only view */}
      {/* <div className='variant vi' >
      <div className='ol-1 '>
        <div className='oll1'>
        <img src={cat1} className='i-1'></img>

        </div>
        <h5>Cake & Milk</h5>
        <p>26 items</p>
      </div>

      <div className='ol-2' >
        <div className='oll2'>
        <img src={cat2} className='i-1'></img>
        </div>

        <h5>Ogranic Kiwi</h5>
        <p>26 items</p>
      </div>
      <div className='ol-3'>
        <div className='oll3'>
        <img src={cat3} className='i-1'></img>
        </div>

        <h5>Peach</h5>
        <p>26 items</p>
      </div>
      <div className='ol-4'>
        <div className='oll4'>
        <img src={cat4} className='i-1'></img>
        </div>

        <h5>Apples</h5>
        <p>35 items</p>
      </div>
      <div className='ol-5'  >
        <div className='oll5'>
        <img src={cat5} className='i-1'></img>
        </div>

        <h5>Snack</h5>
        <p>54 items</p>
      </div>
      <div className='ol-6' >
        <div className='oll6'>
        <img src={cat6} className='i-1'></img>
        </div>

        <h5>Vegtables</h5>
        <p>76 items</p>
      </div>
      <div className='ol-7'>
        <div className='oll7'>
        <img src={cat7} className='i-1'></img>
        </div>

        <h5>Strawberry</h5>
        <p>124 items</p>
      </div>
      <div className='ol-8' >
        <div className='oll8'>
        <img src={cat8} className='i-1'></img>
        </div>

        <h5>Black Plums</h5>
        <p>98 items</p>
      </div>
    </div> */}
    </div>
  )
}

export default Select