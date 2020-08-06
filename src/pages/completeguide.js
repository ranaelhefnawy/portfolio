import React from 'react'
import certificate2 from '../images/certificate2.jpg';
import Header from '../Components/Header';
import Intro from '../Components/intro';
import Footer from '../Components/Footer';
import '../App.css';

const completeguide = () => {
    return (
        <div>
            <Header />
            <Intro />
            <div className="certificate">
                <div className="title" >
                    <h3>Course Name: </h3>
                    <p>The Complete guide of React (including Hooks, React Router, Redux)</p>
                </div>
                <div className="title">
                    <h3>Course Academind by: </h3>
                    <p>Maximilian Schwarzmuller</p>
                </div>
                <img src={certificate2} alt="certificate2" />
            </div>

            <Footer />
        </div>

    )
}

export default completeguide
