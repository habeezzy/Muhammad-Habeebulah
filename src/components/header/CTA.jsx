import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        b 
    </div>
  )
}

export default CTA