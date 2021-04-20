import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'
import Email from './../images/email-me.png'

function Contact() {
 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_89g87oz', e.target, 'user_XMCEdSADR1I1l1F4kolc2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
 }
    return (
    <section id="contact">
        <div className="contact-wrapper">
            <h2>Contact Me</h2>
        </div>
        <div className="form-container">



          <form onSubmit={sendEmail} >
            <img src={Email} alt="iShah" className="email-image" />
            <div className="input-container">
              <label >Full Name</label>
              <input type="text" name="name" className="input" placeholder="Type Your Name" />
            </div>
            <div className="input-container">
              <label >Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
            </div>
            <div className="input-container">
              <label >Phone</label>
              <input type="tel" name="phone" className="input" placeholder="Phone Number"/>
            </div>
            <div className="input-container textarea">
              <label >Message</label>
              <textarea name="message" className="input" placeholder="Type Your Interest..."></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>

        </div>
    </section>
    )
}

export default Contact;
