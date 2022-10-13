import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderOpened} from 'react-icons/vsc'
import {GiDeliveryDrone} from 'react-icons/gi'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward classname='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderOpened classname='about__icon'/>
              <h5>Projects</h5>
              <small>39+ Completed</small>
            </article>

            <article className="about__card">
              <GiDeliveryDrone classname='about__icon'/>
              <h5>Drone Work</h5>
              <small></small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam asperiores quo nihil omnis sit fugit sed vel quod, accusantium eos ratione nemo exercitationem aspernatur commodi velit odio iusto voluptatem unde?
          </p>

          <a href="#contact" className='btn btn-primary'>Connect</a>

        </div>
      </div>
    </section>
  )
}

export default About