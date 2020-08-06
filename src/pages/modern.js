import React from 'react'
import certificate1 from '../images/certificate1.jpg';
import Header from '../Components/Header';
import Intro from '../Components/intro';
import Footer from '../Components/Footer';
import '../App.css';

const modern = () => {
    return (
        <div>
            <Header />
            <Intro />
            <div className="certificate">
                <div className="title" >
                    <h3>Course Name: </h3>
                    <p>Modern React with Redux</p>
                </div>
                <div className="title">
                    <h3>Course Academind by: </h3>
                    <p>Stephen Grider</p>
                </div>
                <img src={certificate1} alt="certificate1" />
            </div>

            <Footer />
        </div>

    )
}

export default modern;
