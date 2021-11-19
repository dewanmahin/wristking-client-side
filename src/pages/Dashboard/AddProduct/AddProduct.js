import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Package added successfully");
                reset();
            })
    };

    return (
        <div className="addProduct">
            <h2 className="title">Add Product</h2>
            <div className="container">
                <form className="form w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-2 py-2" {...register("picture")} placeholder="image url"/>
                    <input className="form-control mb-2 py-2" {...register("name")} placeholder="Product Name"/>
                    <input className="form-control mb-2 py-2" {...register("desc")} placeholder="Product Description"/>
                    <input className="form-control mb-3 py-2" type="number" {...register("price")} placeholder="Product Price"/>
                    <input className="btn common-btn" type="submit" value="Add Product"/>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;