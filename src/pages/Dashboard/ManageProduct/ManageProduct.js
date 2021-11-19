import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const {_id, picture, name, desc, price} = props.manageProduct;

    return (
        <div className="manageProduct">
            <div className="card" style={{width: "22rem"}}>
                <img src={picture} className="card-img-top" alt="" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{desc.slice(0, 240)}</p>
                    <div className="d-flex card-end pb-2 justify-content-between">
                        <p className="card-text m-0 d-flex justify-content-center align-items-center">${price}</p>
                        <button  onClick={() => {props.handleDelete(_id)}}  className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;