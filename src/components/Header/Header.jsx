import React from 'react'
import "./Header.scss";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div id='header'>
        <div className="logo">
            <Link to="/"> <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" width='150px' alt="nasa-logo" /></Link>
        </div>
        <ul className="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            <li><Link className='btnl' to="/login">Login</Link></li>
            <li><Link className='btnl' to="/signup">Sign up</Link></li>
        </ul>
    </div>
  )
}

export default Header