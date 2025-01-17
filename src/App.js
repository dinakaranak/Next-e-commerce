
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './components/Slide';
import Select from './components/Select';
import Naved from './components/Naved';
import Deals from './components/Deals';
import Now from './components/Now';
import Stay from './components/Stay';


const App = () => {
  return (
    <div>
      <Naved />
      <Slide />
      <Select />


      <Now />

      
      <Deals /> 
      <Stay />    
    </div>
  )
}

export default App