import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import  Hero  from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Tittle from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState] = useState(false)


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Tittle subTitle='Our PROGRAM' title='What we Offer'/>
         <Programs/>
         <About setPlayState={setPlayState}/>
         <Tittle subTitle='Gallery' title='Campus Photo'/>
    <Campus />
    <Tittle subTitle='TESTIMONIALS' title='What Students Says'/>
    <Testimonials/>
    <Tittle subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>


      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    
    </div>
  )
}

export default App