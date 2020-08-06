import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <h2>Contact</h2>
        <div>
          <h6 >Ranaelhefnawy9@gmail.com</h6>
        </div>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/ranaelhefnawy" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://www.linkedin.com/in/rana-elhefnawy-2583781b3/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://dribbble.com/RanElhefnawy" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-dribbble"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://khamsat.com/user/ranaelhefnawy" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-500px"></i>
            </a>
          </li>

        </ul>

      </footer>
    )
}

export default Footer;
