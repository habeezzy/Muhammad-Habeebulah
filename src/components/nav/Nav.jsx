import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {VscSettingsGear} from 'react-icons/vsc'
import {BiMessageDetail} from 'react-icons/bi'




const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><VscSettingsGear/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default nav