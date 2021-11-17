import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo Area */}
                    <Link className="navbar-brand logo" to='/'>Wrist<span style={{color: '#b29466', fontSize: '43px', fontFamily: 'auto'}}>K</span>ing</Link>
                    {/* Hamburger Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Home' activeStyle={{color: "#b29466"}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products' activeStyle={{color: "#b29466"}}>Products</NavLink>
                            </li>
                            {
                                !user?.email ? <span style={{display: "none"}}></span> :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/dashboard' activeStyle={{color: "#b29466"}}>Dashboard</NavLink>
                                </li>
                            }
                        </ul>
                        {
                            user?.email ? 
                            <button onClick={logOut} className="btn common-btn">Logout</button> :
                            <Link to="/login">
                                <button className="btn common-btn">Login</button>
                            </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;