import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './OrderDetails.css'

const OrderDetails = () => {
    let {_id} = useParams();
    const user = useAuth();

    const [orderDetails, SetOrderDetails] = useState([]);
    const [singleDtl, setSingleDtl] = useState([]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.singleItem = singleDtl;
        // console.log(data)
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    reset();
                    alert("Your booking is confirmed.")
                })
    };

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => SetOrderDetails(data))
    }, [])
    
    useEffect(() => {
        const foundDtl = orderDetails.find(orderDetail => orderDetail._id === _id);
        setSingleDtl(foundDtl)
    }, [orderDetails])

    return (
        <div className="orderDetails">
            <div className="container">
                <h2 className="m-0 mb-5">Please fill the form for order confirmation.</h2>
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <img src={singleDtl?.picture} alt="" />
                        <h1>{singleDtl?.name}</h1>
                        <p>{singleDtl?.desc}</p>
                        <h3><span>$</span> {singleDtl?.price}</h3>
                    </div>
                    <div className="col-lg-4 col-12 mt-5 pt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <input defaultValue={user?.user?.displayName} {...register("userName")} className="form-control py-3 mb-3"/>
                            <input defaultValue={user?.user?.email} {...register("userEmail")} className="form-control py-3 mb-3"/>
                            <input {...register("address")} placeholder="Your Address" className="form-control py-3 mb-3"/>
                            <input type="number" {...register("number")} placeholder="Your Number" className="form-control py-3"/>
                            <input type="submit" value="Confirm" className="btn common-btn mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;