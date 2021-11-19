import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const {user} = useAuth();

    const onSubmit = data => {
        data.userName = user?.displayName
        fetch(`https://lit-thicket-61306.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Review submitted successfully");
                reset();
            })
    };

    return (
        <div className="review">
            <h2 className="title">Your feedback is very valuable to us.</h2>
            <div className="container">
                <form className="form w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <textarea className="form-control mb-4 py-2" {...register("review")} placeholder="Write your valuable feedback." style={{height: "150px"}}/>
                    <input className="btn common-btn" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default Review;