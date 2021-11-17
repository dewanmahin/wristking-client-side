import React from 'react';
import './Register.css'
import registerImg from '../../../images/register.jpg'
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const {registerUser, authError, isLoading} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        // console.log(newRegisterData);
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row align-items-center">
                    {
                        !isLoading && 
                        <>
                            <div className="col-lg-6 col-12">
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="col-lg-6 col-12 form-area">
                                <h2>Register</h2>
                                <Form onSubmit={handleRegisterSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input type="text" className="form-control py-2 mb-2" placeholder="Your Name" name="name" onBlur={handleOnBlur} />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control py-2 mb-2" placeholder="Your Email" name="email" onBlur={handleOnBlur} />
                                        </div>
                                        <div className="col-12">
                                            <input type="password" className="form-control py-2 mb-4" placeholder="Your Password" name="password" onBlur={handleOnBlur} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn w-100 common-btn">Register</button>
                                </Form>
                                <p>Already Register ? <Link to='/login'>Please Login</Link></p>
                            </div>
                        </>
                    }
                    {
                        isLoading && 
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        authError ? <div className="alert alert-danger" role="alert">{authError}</div> : <span></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;