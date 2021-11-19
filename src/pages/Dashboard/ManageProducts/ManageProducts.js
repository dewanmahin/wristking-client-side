import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css'

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    // Delete Product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        alert('deleted successfully');
                        const remainingProducts = manageProducts.filter(restProducts => restProducts._id !== id);
                        setManageProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <div className="manageProducts">
            <h1 className="title">Manage All Products</h1>
            <div className="container">
                <div className="hpd-card">
                    {
                        manageProducts.map(manageProduct => <ManageProduct key={manageProduct._id} manageProduct={manageProduct} handleDelete={handleDeleteProduct}></ManageProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;