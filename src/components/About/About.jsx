import React from 'react'
import './about.css'
import aboutImg from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import {SiHandshake} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'

function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImg} alt="me__again" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small> 3+ Years Working</small>
              </article>
              <article className='about__card'>
                <SiHandshake className='about__icon' />
                <h5>Client</h5>
                <small> 200+ Worldwide</small>
              </article>
              <article className='about__card'>
                <CgWebsite className='about__icon' />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>



            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima velit autem necessitatibus provident blanditiis veritatis quam inventore, laboriosam fugiat voluptatum possimus sapiente ipsa modi recusandae id est! Doloribus, est?
            </p>


            <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about