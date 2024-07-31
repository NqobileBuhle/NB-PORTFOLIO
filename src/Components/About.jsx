import React from 'react'
import AboutPic from '../Assets/Nqobile.jpeg'

const About = () => {
  return (
    
    <section id='About'>
      <div className="paragraph-container">
      <div className="Asset">
      {/* <img className="card-img-top" src={AboutPic} alt=" AboutPic"  /> */}
      </div>
      <div className="content">
        <div className="about">
          <h2>
            ABOUT ME
    
          </h2>
        </div>
        <div className="paragraph">
        <p >
         I'm  a passionate and dedicated software developer with a knack for turning 
         complex problems into elegant, efficient solutions. With a strong foundation 
         in JavaScript and a keen interest in developing innovative web applications, 
         I thrive on creating seamless user experiences and robust backend systems.
         I started my journey in software development 2 years ago, driven by a curiosity for technology 
         and a desire to make a tangible impact through code. Over the years, 
         I have honed my skills through various projects, both personal and professional, 
         constantly learning and adapting to new technologies and methodologies.
      </p>
       
      <div className="skills">
        <h2>
          My Skills
        </h2>
      </div>

        </div>
        
      </div>
    </div>
    </section>
  )
}

export default About

