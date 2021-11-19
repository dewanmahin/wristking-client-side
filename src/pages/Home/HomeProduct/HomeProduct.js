import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeProduct.css'

const HomeProduct = (props) => {
    const {_id, picture, name, desc, price} = props.homeProduct;

    return (
        <div className="homeProduct">
            <div className="card" style={{width: "22rem"}}>
                <img src={picture} className="card-img-top" alt="" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{desc.slice(0, 240)}</p>
                    <div className="d-flex card-end pb-2 justify-content-between">
                        <p className="card-text m-0 d-flex justify-content-center align-items-center">${price}</p>
                        <NavLink to={`/orderDtl/${_id}`} className="btn common-btn">Order Now <FontAwesomeIcon icon={faCartPlus} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;