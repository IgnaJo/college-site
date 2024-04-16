import React from 'react'
import '../Contact/Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4b00abeb-89c5-4cf6-89e8-6f0e06a1ddd7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to contact us, because we want the best for u</p>
        <ul>
            <li><img src={mail_icon} alt="" />contact@college.cl</li>
            <li><img src={phone_icon} alt="" />+56050542355</li>
            <li><img src={location_icon} alt="" />Av Alcantara 200<br/>Las Condes, Chile</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' required placeholder='Enter your mobile phone'/>
            <label>Write your message here</label>
            <textarea name='message' id=''  rows='6' placeholder='Enter your message here!' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
