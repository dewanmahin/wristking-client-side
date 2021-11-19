import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeReview from '../HomeReview/HomeReview'
import './HomeReviews.css'

const HomeReviews = () => {
    const [homeReviews, setHomeReviews] = useState([]);

    useEffect(() => {
        fetch('https://lit-thicket-61306.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setHomeReviews(data))
    }, [])

    return (
        <div className="homeReviews">
            <div className="homeProducts-title">
                <h5 className="m-2">TESTIMONIALS</h5>
                <h2 className="m-0">Client Speaks</h2>
            </div>
            <div className="container">
                <div className="row gy-4">
                    {
                        homeReviews.map(homeReview => <HomeReview key={homeReview._id} homeReview={homeReview}></HomeReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeReviews;