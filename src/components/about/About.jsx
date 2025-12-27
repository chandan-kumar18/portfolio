import React from 'react'
import './about.css'
import Me from "../../assets/me-about.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experiance</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUser className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+</small>
          </article>
       </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Amet sequi recusandae inventore ipsa tempore, eum obcaecati iste architecto tenetur harum dolorem. Velit aperiam optio, 
          facere repellat adipisci in molestias ullam?
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>

  )
}

export default About