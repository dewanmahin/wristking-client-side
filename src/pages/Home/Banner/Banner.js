import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 text-start mt-5 pt-5">
                        <h5>NEW ARRIVALS</h5>
                        <h1>Our Best Collections</h1>
                        <Link to='/products'>
                            <button className="btn common-btn"><span>Explore</span> <FontAwesomeIcon className="ms-1" icon={faAngleRight}></FontAwesomeIcon></button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;