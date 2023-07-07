import React from 'react'
import './about.css'
import lbImg from '../../images/Myname.jpg'

const About = () => {
  return (
    <section>
      <h5>Learn</h5>
      <h2>About Me</h2>
      <div className='container aboutContainer'>
        <div className='myImg'>
          <img src={lbImg} alt="avatar"/>
        </div>
        <div className='aboutMe'>
          {/* <article className="card">
            <h5>expirence</h5>
            <p>none</p>
          </article> */}
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus ullam tenetur ipsam dolorem blanditiis, veritatis obcaecati qui nostrum velit tempore, ex culpa soluta, sunt consectetur delectus est nobis amet!</p>

          <a href='#contact' className='btn btn-primary'>contact</a>
        </div>
      </div>
    </section>
  )
}

export default About