import React from "react";
// import NavBar from '../Components/NavBar.css';
// import { Link } from "react-router-dom";
import "../index.css";
import contactImg from  '../Assets/contact.jpg';
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <span>PORTFOLIO</span>
            </div>
            <div className="MenuList">
        
                <Link className="MenuList">HOME</Link>
                <Link className="MenuList">ABOUT</Link>
                <Link className="MenuList">PROJECTS</Link>
                <Link className="MenuList">CONTACT</Link>

            </div>
            <button className="MenuButton" >
                <img src={contactImg} alt="" className="MenuImg"/>Contact</button>
        </nav>
    )
}
export default NavBar; 
