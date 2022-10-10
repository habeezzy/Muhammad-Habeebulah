import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrDribbble} from 'react-icons/gr'

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/muhammad-habeebulah" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/habeezzy" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://dribble.com/habeezzy" target="_blank" rel="noreferrer"><GrDribbble/></a>
    </div>
  )
}

export default headerSocials