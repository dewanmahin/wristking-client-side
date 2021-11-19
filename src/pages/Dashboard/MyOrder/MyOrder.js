import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MyOrder.css'

const myOrder = (props) => {
    const {_id, singleItem} = props.myOrder;

    return (
        <div className="col-lg-6 col-12">
            <div className="myOrder">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={singleItem?.picture} className="img-fluid rounded-start h-100 rounded-0" alt=""/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body myOrders-card d-flex justify-content-between align-items-center h-100">
                            <h1 className="card-title">{singleItem?.name}</h1>
                            <p className="card-text m-0 d-flex justify-content-center align-items-center">${singleItem?.price}</p>
                            <button  onClick={() => {props.handleDelete(_id)}}  className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default myOrder;