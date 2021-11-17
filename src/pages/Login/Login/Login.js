import React from 'react';
import './Login.css'
import loginImg from '../../../images/login.jpg'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser, authError, user, isLoading} = useAuth();
    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row align-items-center">
                    {/* {
                        !isLoading &&
                        <> */}
                            <div className="col-lg-6 col-12">
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="col-lg-6 col-12 form-area">
                                <h2>Login</h2>
                                <Form onSubmit={handleLoginSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input type="email" className="form-control py-2 mb-2" placeholder="Your Email" name="email" onBlur={handleOnBlur} />
                                        </div>
                                        <div className="col-12">
                                            <input type="password" className="form-control py-2 mb-4" placeholder="Your Password" name="password" onBlur={handleOnBlur} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn w-100 common-btn">Login</button>
                                </Form>
                                <p>New User ? <Link to='/register'>Please Register</Link></p>
                            </div>
                        {/* </>
                    } */}
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
                    {
                        user?.email ? <div className="alert alert-success" role="alert">Login Successful!</div> : <span></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;