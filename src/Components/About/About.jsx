import React from 'react'
import '../About/About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Norturing Tomorrows Leaders Today</h2>
        <p>sjdkajshdkjashdkahskdjhaskjhdkajshdkjhaskjdhkasjdhkjashdkjashd
            asdjahsdkhaskjdhkjashdkjashdjkahskdjhsakjdhkashdjkashkdhaksd
            adsjksahdkhaskjdhaskdhkjashdkjashkdjhaskdhkahskjdhaksdhkas
        </p>
        <p>ajkshdljasldjlsajldkjaslkjdlasjldjalsjdljaslkdjlasjdljasldjalsk
            sadjkaskdhkjashdkjhasjkdhakjshdkjsahkjdhsakjdhkjsahdkjasda
        </p>
        <p>
            slkdjalskjdlkasjdkljsalkdjlaksjdlsajlkdjalskjdlkasjdkljaslkdas
            sdjahsdkhaskjdhkjashdkjashdjkahskdjhsakjdhkashdjkashkdhaksd
            adsjksahdkhaskjdhaskdhkjashdkjashkdjhaskdhkahskjdhaksdhkas
        </p>
        
      </div>
    </div>
  )
}

export default About
