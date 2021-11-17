import React from 'react';
import './About.css'
import aboutImg from '../../../images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 text-start">
                        <h5>ABOUT US</h5>
                        <h2>A Unique watch that fits Your Style</h2>
                        <p>The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
                        <button className="btn common-btn"><span>Explore</span> <FontAwesomeIcon className="ms-1" icon={faAngleRight}></FontAwesomeIcon></button>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;