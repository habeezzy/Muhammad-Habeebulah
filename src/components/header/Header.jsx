import React from 'react'
import './Header.css'
import CTA from './CTA'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Habeebulah</h1>
        <h1 className="text-light">Fullstack Developer</h1>
        <CTA/>
      </div>

    </header>
  )
}

export default header





