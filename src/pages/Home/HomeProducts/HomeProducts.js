import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import './HomeProducts.css';

const HomeProducts = () => {
    const [homeProducts, setHomeProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setHomeProducts(data))
    }, [])

    return (
        <div className='homeProducts'>
            <div className="homeProducts-title">
                <h5 className="m-2">OUR PRODUCTS</h5>
                <h2 className="m-0">Our Bestsellers</h2>
            </div>
            <div className="container">
                <div className="hpd-card">
                    {
                    homeProducts.map(homeProduct => <HomeProduct key={homeProduct._id} homeProduct={homeProduct}></HomeProduct>).slice(0, 6)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;