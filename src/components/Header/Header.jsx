import React from 'react'
import './header.css'
import Cta from './Cta'
import myImage from '../../assets/me.png'
import Headersocials from './Headersocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adebayo Oyindamola Titus</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <Headersocials />

        <div className="me">
          <img src={myImage} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>



      </div>
    </header>
  )
}

export default Header