import React from 'react'
import AboutPic from '../Assets/Nqobile.jpeg'

const About = () => {
  return (
    <div className="paragraph-container">
      <div className="Asset">
      <img className="card-img-top" src={AboutPic} alt=" AboutPic"  />
      </div>
      <div className="content">
        <div className="about">
          <h2>
            ABOUT ME
    
          </h2>
        </div>
        <div className="paragraph">
        <p >
        I am a passionate full-stack software developer with a strong background 
        in both front-end and back-end development. I specialize in building robust, scalable 
        web applications using modern technologies and frameworks. With a keen eye for detail and a dedication to delivering high-quality code, I thrive in dynamic, fast-paced environments 
        where innovation and problem-solving are key.
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default About

