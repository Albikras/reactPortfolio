import React from 'react'
import './header.css'
import lbImg from '../../images/Myname.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Albi Krasniqi</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Socials/>
        <div className='myImage'>
          <img src={lbImg} alt="avatar"/>
        </div>
      </div>
    </header>
  )
}

export default Header