import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrDribbble} from 'react-icons/gr'

const headerSocials = () => {
  return (
    <div>
        <a href="https://linkedin.com/in/muhammad-habeebulah" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://dribble.com" target="_blank"><GrDribbble/></a>
    </div>
  )
}

export default headerSocials