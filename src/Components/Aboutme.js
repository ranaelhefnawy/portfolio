import React from 'react';

import me from '../images/menew.jpg';

const Aboutme = () => {
  return (
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Freelance front-end developer
        </p>
        <div className="about-me__body">
          <p>I were always curious about learning coding, so i started learning to code on my own from 2 years.
          I started with python then i found my passion in web design.
          </p>
          <p>It is a place that i can release my creativity and bring ideas to life</p>
        </div>
        <img src={me} alt="learning" className="about-me__img" />
      </section>
  )
}

export default Aboutme
