import React from 'react'

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">My Skills</h2>
      <div className="services">
        <div className="service">
          <h3>Code</h3>
          <p>
          HTML
          <br/>
          CSS
          <br />
          CSS Animation
          <br/>
          Javascript
          <br/>
          React
          <br/>
          Redux
          <br/>
          Python
          </p>
        </div>

        <div className="icons">
          <div className="icon">
            <img src="https://img.icons8.com/dusk/64/000000/service.png" alt="icon1 "/>
            <p>Understand client's needs and make it alive.</p>
          </div>
          <div className="icon">
            <img src="https://img.icons8.com/dusk/64/000000/easy.png" alt="icon2"/>
            <p>Preference for easy to use, User friendly interface.</p>
          </div>
          <div className="icon">
            <img src="https://img.icons8.com/dusk/64/000000/media-queries.png" alt="icon3"/>
            <p>Responsive website will work on any screen size.</p>
          </div>
          <div className="icon">
            <img src="https://img.icons8.com/dusk/64/000000/hourglass-sand-top.png" alt="icon4 "/>
            <p>Delivering the project on time, my highest priority.</p>
          </div>
        </div>

      </div>
    </section>

    )
}

export default Services;
