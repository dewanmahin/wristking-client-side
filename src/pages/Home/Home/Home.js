import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeProducts></HomeProducts>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;