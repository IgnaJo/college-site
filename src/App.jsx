import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import  Hero  from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Tittle from './Components/Tittle/Tittle'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Tittle/>
         <Programs/>
      </div>
      
    
    </div>
  )
}

export default App