import React from 'react'

import './projects.css'

const projects = () => {
  return (
    <section>
      <h5></h5>
      <h2></h2>

      <div className="container portContainer">
        <article className='project'>
          <div className='projectImg'>
            <img/>
          </div>
          <h3>project title</h3>
          <div className='projectBtns'>
          <a href='#github' className='btn'>Github</a>
          <a href='#liveDemo' className='btn btn-primary'>Live App</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default projects