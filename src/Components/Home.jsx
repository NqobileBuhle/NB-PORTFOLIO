import React from "react";
import "../index.css";
import myPic from '../Assets/profile.jpeg';
// import hireIcon from '../Assets/HireMe.png';
import { Link } from "react-scroll";

const Home =()=>{
    return(
        <section id="Intro">
           <div className="IntroContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm < span className="IntroName">Nqobile</span> <br />FULL STACK <br /> SOFTWARE DEVELOPER</span>
            <p className="IntroParagraph"> I am a very passionate and skilled full stack developer.</p>
                <Link><button className="HireBtn">Hire Me</button></Link >
                 
               
            </div> 
            <div>
            <img className="card-img-top" src={myPic} alt=" myPic"  />
            </div>
            
        </section>
    )
}
export default Home;