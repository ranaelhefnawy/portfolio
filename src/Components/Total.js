import React from 'react';

import '../App.css';
import Work from './Work';
import Intro from './intro';
import Services from './Services';
import Aboutme from './Aboutme';
import Header from './Header';
import Footer from './Footer';
import Topbutton from './topbutton';

function Total() {

  return (
    <>
      <Header />
      <div className="allsite">
        <Intro />
        <Services />
        <Aboutme />
        <Work />
        <Footer />
        <Topbutton />
      </div>
    </>

  );
}

export default Total;
