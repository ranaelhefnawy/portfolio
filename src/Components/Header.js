import React from 'react';
import logonew from '../images/Logonew.png';

const Header = () => {
    return (
    <header className="head">
        <div className="logo">
          <a href="/">
            <img src={logonew} alt="RE logo" />
          </a>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className="nav">
            <ul>
                <li><a href="/#home" className="nav__link">Home</a></li>
                <li><a href="/#services" className="nav__link">Skills</a></li>
                <li><a href="/#about" className="nav__link">About</a></li>
                <li><a href="/#work" className="nav__link">Projects</a></li>
                <li><a href="/#footer" className="nav__link">Contact</a></li>
            </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label"><span></span></label>
    </header>
    )
}

export default Header;
