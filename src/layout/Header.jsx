import logo from '../assets/images/SDI.png'

const Header = () => {
    return ( 

        <div className="nav">
            <img src={logo} />
                <ul className="links">
                    <li className="a-link">About Us</li>
                    <li className="a-link">Services</li>
                    <li className="a-link">Gallery</li>
                    <li className="a-link">Contact Us</li>
                </ul>
        </div>
     );
}
 
export default Header;