// import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/SDI.png'
import { slide as Menu } from 'react-burger-menu'

const Header = () => {
  
    return ( 

        <div className="nav">
            <Link to="/"><img src={logo} alt="carpentry business logo Shiloh Decorative Ideas"/></Link>
                <ul className="links">
                <a href="#about-us"><li className="a-link">About Us</li></a>
                <a href="#services"><li className="a-link">Services</li></a>
                <a href="#photos"><li className="a-link">Gallery</li></a>
                <a href="#contact"><li className="a-link">Contact Us</li></a>
                </ul>
            <Menu burgerButtonClassName={ "burger" }>
            <a href="#about-us"><li className="a-link">About Us</li></a>
                <a href="#services"><li className="a-link">Services</li></a>
                <a href="#photos"><li className="a-link">Gallery</li></a>
                <a href="#contact"><li className="a-link">Contact Us</li></a>
                {/* <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */} 
            </Menu>
        </div>
     );
     
}
 
export default Header;