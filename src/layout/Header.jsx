import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/SDI.png'

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return ( 

        <div className="nav">
            <Link to="/"><img src={logo} alt="carpentry business logo Shiloh Decorative Ideas"/></Link>
                <ul className="links">
                <a href="#about-us"><li className="a-link">About Us</li></a>
                <a href="#services"><li className="a-link">Services</li></a>
                <a href="#photos"><li className="a-link">Gallery</li></a>
                <a href="#contact"><li className="a-link">Contact Us</li></a>
                </ul>
                {/* Mobile Menu */}
                <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                }}>
                {/* icon from heroicons.com */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
                <div
                 className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                  }>
                        <ul>
                            <a href="#about-us"><li className="a-link">About Us</li></a>
                            <a href="#services"><li className="a-link">Services</li></a>
                            <a href="#photos"><li className="a-link">Gallery</li></a>
                            <a href="#contact"><li className="a-link">Contact Us</li></a>
                        </ul>
                        </div>
                </div>
     );
     
}
 
export default Header;