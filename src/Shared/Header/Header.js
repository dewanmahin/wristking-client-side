import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    {/* Logo Area */}
                    <Link className="navbar-brand logo" to='/'>Wrist<span style={{color: '#b29466', fontSize: '43px', fontFamily: 'auto'}}>K</span>ing</Link>
                    {/* Hamburger Button */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* Nav Links */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/Home' activeStyle={{color: "#b29466"}}>Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/products' activeStyle={{color: "#b29466"}}>Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/dashboard' activeStyle={{color: "#b29466"}}>Dashboard</NavLink>
                            </li>
                            <li class="nav-item">
                            {/* <a class="nav-link disabled">Disabled</a> */}
                            </li>
                        </ul>
                        <Link to="/login">
                            <button className="btn common-btn">Login</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;