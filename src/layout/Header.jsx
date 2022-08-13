import logo from '../assets/images/SDI.png'

const Header = () => {
    return ( 

        <div className="nav">
            <img src={logo} />
                <ul className="links">
                    <a href="#"><li className="a-link">About Us</li></a>
                    <a href="#"><li className="a-link">Services</li></a>
                    <a href="#"><li className="a-link">Gallery</li></a>
                    <a href=""><li className="a-link">Contact Us</li></a>
                </ul>
        </div>
     );
}
 
export default Header;