import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const {_id, picture, name, desc, price} = props.product;

    return (
        <div className="col-lg-6 col-12">
            <div className="product">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start h-100 rounded-0" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body products-card">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{desc}</p>
                            <div className="d-flex card-end justify-content-between">
                                <p className="card-text m-0 d-flex justify-content-center align-items-center">${price}</p>
                                <NavLink to={`/orderDtl/${_id}`} className="btn common-btn">Order Now <FontAwesomeIcon icon={faCartPlus} /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;