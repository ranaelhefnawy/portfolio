import React from 'react';

import beach from '../images/beach.png';
import covid from '../images/covid.png';
import imdb from '../images/imdb.png';
import phone from '../images/phone.png';

const Work = () => {
  return (
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">Projects</h2>
        <p className="section__subtitle section__subtitle--work">Some of my work</p>

        <div className="portfolio">

          <div className="project">
            <a href="https://elhefnawyimdb.netlify.app/#/" className="portfolio__item" rel="noopener noreferrer" target="_blank">
              <img src={imdb} alt="portfolio" className="portfolio__img" />
            </a>
            <div className="project-text">
              <a href="https://elhefnawyimdb.netlify.app/#/" rel="noopener noreferrer" target="_blank">Movies Rating IMDB</a>
              <a href="https://github.com/ranaelhefnawy/Movies-IMDB" rel="noopener noreferrer" target="_blank" >Src Code</a>
            </div>
          </div>

          <div className="project">
            <a href="https://elhefnawybeachresort.netlify.app/" className="portfolio__item" rel="noopener noreferrer" target="_blank">
              <img src={beach} alt="portfolio" className="portfolio__img" />
            </a>
            <div className="project-text">
              <a href="https://elhefnawybeachresort.netlify.app/"  rel="noopener noreferrer" target="_blank">Beach Resort</a>
              <a href="https://github.com/ranaelhefnawy/beach-resort" rel="noopener noreferrer" target="_blank" >Src Code</a>
            </div>
          </div>

          <div className="project">
            <a href="https://elhefnawycovid-19tracker.netlify.app/" className="portfolio__item"  rel="noopener noreferrer" target="_blank">
              <img src={covid} alt="portfolio" className="portfolio__img" />
            </a>
            <div className="project-text">
              <a href="https://elhefnawycovid-19tracker.netlify.app/" target="_blank" rel="noopener noreferrer">Covid-19 Tracker</a>
              <a href="https://github.com/ranaelhefnawy/covid-19-tracker" rel="noopener noreferrer" target="_blank" >Src Code</a>
            </div>
          </div>

          <div className="project">
            <a href="https://elhefnawyphonestore.netlify.app/" className="portfolio__item"  rel="noopener noreferrer" target="_blank">
              <img src={phone} alt="portfolio" className="portfolio__img" />
            </a>
            <div className="project-text">
              <a href="https://elhefnawyphonestore.netlify.app/"  target="_blank" rel="noopener noreferrer">Smart Phone Online Store</a>
              <a href="https://github.com/ranaelhefnawy/react-phone-store" rel="noopener noreferrer" target="_blank" >Src Code</a>
            </div>
          </div>

        </div>
      </section>
  )
}

export default Work;

