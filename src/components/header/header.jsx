import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/me.svg'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Je suis </h5>
        <h1>Mamadou Salifou</h1>
        <h5 className='tex-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt='Mon image' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header