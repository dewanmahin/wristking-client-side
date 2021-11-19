import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <div className="divider"></div>
            <HomeProducts></HomeProducts>
            <div className="divider1"></div>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;