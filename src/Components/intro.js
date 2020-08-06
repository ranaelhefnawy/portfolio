import React from 'react'
import rana from '../images/me.jpg';

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        <strong>Rana El-Hefnawy</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">FRONT-END DEVELOPER</p>
      <img src={rana} alt="my pic" className="intro__img" />
    </section>
  )
}

export default Intro;
