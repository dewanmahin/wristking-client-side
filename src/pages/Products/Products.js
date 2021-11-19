import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://lit-thicket-61306.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="products">
            <div className="products-title">
                <h5 className="m-0">LATEST DESIGNS</h5>
                <h2 className="m-0">Our Trending Collections</h2>
            </div>
            <div className="container">
                <div className="row gy-4 gx-3 mb-2">
                        {
                            products.map(product => <Product key={product._id} product={product}></Product>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Products;