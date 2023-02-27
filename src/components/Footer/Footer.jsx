import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>TITUS</a>
       
      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Testimonials</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <AiFillFacebook /> </a>
        <a href="https://instagram.com"> <FaInstagramSquare /> </a>
        <a href="https://Twitter.com"> <FaTwitterSquare /> </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Rex Network. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer