import React from 'react'
// import fb from '../Assets/facebook.png';
// import insta from '../Assets/instagram';
// import imageIn from '../Assets/linkedIn.png';

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";




const Contact = () => {
  return (
    <section id="Contact" className='getMe'>
     
      <h2>CONTACT ME</h2>

      <div className='contact'>
        

        <div className='contact-container'>
          <div className="contact-option">
            <article className="contact-options">

              <h4 className='text'>email</h4>
              < MdEmail className="social-icons"></MdEmail>
              <h5>NqobileBiyela3@gmail.com</h5>
              <a href="mailto:NqobileBiyela3@gmail.com">Send Email</a>
            </article>

            <article className="contact-options">
              <h4 className='text'>Phone</h4>
              <FaPhoneAlt className="social-icons" />
              <h5>0786490983</h5>
              <a href="mailto:NqobileBiyela3@gmail.com">Call Me</a>
            </article>

            <article className="contact-options">

              <h4 className='text'>Facebook</h4>
              <CiFacebook className="social-icons" />
              <h5>NqobileBiyela3@gmail.com</h5>
              <a href="mailto:NqobileBiyela3@gmail.com">Send Message</a>
            </article>
          </div>

          <div className='text-area'>
            <input className='name' type="text" placeholder='Your Full Name' />
            <input className='surname' type="text" placeholder='Email' />
            <textarea className='message' name="" id="" placeholder='Message'></textarea>
            <button className='btn-sub'>Submit</button>


            <br />
          </div>
          
        </div>
      </div>






    </section>


  )
}

export default Contact
