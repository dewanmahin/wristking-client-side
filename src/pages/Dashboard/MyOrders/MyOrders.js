import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const user = useAuth();
    const userEmail = user?.user?.email;

    useEffect(() =>{
        fetch(`http://localhost:5000/allOrders/${userEmail}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [userEmail]) 

    // Delete Order
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
                        const remainingOrders = myOrders.filter(restOrders => restOrders._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div className="myOrders">
            <h1 className="title">My Orders</h1>
            <div className="container">
                <div className="row gy-4 gx-3 mb-2">
                    {
                        myOrders.map(myOrder => <MyOrder key={myOrder._id} myOrder={myOrder}  handleDelete={handleDeleteOrder}></MyOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;