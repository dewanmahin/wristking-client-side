import React from 'react';
import './Error404.css'
import errorGif from '../../images/error.gif'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error404">
            <img src={errorGif} alt="" />
            <Link className="btn common-btn" to="/">Go Back Home</Link>
        </div>
    );
};

export default Error404;