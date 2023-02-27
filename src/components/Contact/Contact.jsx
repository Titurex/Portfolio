import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  // console.log(window.innerHeight)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_itab0d9', 'template_kr7rk65', form.current, 'WsFEa9nZTyLmpUsnV')
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset( )
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          {/* Email */}
          <article className='contact__option'>

            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Titurexzus@gmail.com</h5>
            <a href="mailto:Titurexzus@gmail.com" target="_blank">Send a message</a> 
          
          </article>

          {/* Messanger  */}
          <article className='contact__option'>

            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Titurex</h5>
            <a href="https://m.me/titurex" target="_blank">Send a message</a> 
          </article>

          {/* Whatsapp */}
          <article className='contact__option'>

            <FaWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2349065545924</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349065545924" target="_blank">Send a message</a> 
          </article>

        </div>
        {/* ---End of contact option---- */}

        {/* ----contact form------ */}

        <form  ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact