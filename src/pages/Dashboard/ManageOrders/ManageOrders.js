import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css'

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/allOrders/`)
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [manageOrders]) 

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/allOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        alert('deleted successfully');
                        const remainingOrders = manageOrders.filter(restOrders => restOrders._id !== id);
                        setManageOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div className="manageOrders">
            <h1 className="title">All Orders</h1>
            <div className="container">
                <div className="row gy-4 gx-3 mb-2">
                    {
                        manageOrders.map(manageOrder => <ManageOrder key={manageOrder._id} manageOrder={manageOrder}  handleDelete={handleDeleteOrder}></ManageOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;