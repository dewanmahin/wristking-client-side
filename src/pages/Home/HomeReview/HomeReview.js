import React from 'react';

const HomeReview = (props) => {
    const {userName, review} = props.homeReview;

    return (
        <div className="col-lg-6 col-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title fs-3">{userName}</h5>
                    <p className="card-text fs-5">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;