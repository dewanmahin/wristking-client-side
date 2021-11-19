import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`https://lit-thicket-61306.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Admin added successfully.");
                reset();
            })
    };

    return (
        <div className="makeAdmin">
            <h1 className="title">Make an admin.</h1>
            <div className="container">
                <form className="form w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-4 py-2" {...register("email")} placeholder="Admin Email."/>
                    <input className="btn common-btn" type="submit" value="Make Admin"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;