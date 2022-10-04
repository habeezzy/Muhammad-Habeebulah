import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Habeebulah</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me" >
          <img src= {ME} alt=""/>
        </div>
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

    </header>
  )
}

export default header



